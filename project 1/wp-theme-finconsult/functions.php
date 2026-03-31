<?php
/**
 * FinConsult functions and definitions
 */

if ( ! function_exists( 'finconsult_setup' ) ) :
    function finconsult_setup() {
        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        // Let WordPress manage the document title.
        add_theme_support( 'title-tag' );

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support( 'post-thumbnails' );

        // Register Menus
        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary Menu', 'finconsult' ),
                'footer' => esc_html__( 'Footer Menu', 'finconsult' ),
            )
        );

        // Switch default core markup to output valid HTML5.
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );
    }
endif;
add_action( 'after_setup_theme', 'finconsult_setup' );

/**
 * Enqueue scripts and styles.
 */
function finconsult_scripts() {
    // Enqueue Google Fonts (Inter)
    wp_enqueue_style( 'finconsult-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', array(), null );
    
    // Enqueue Tailwind CSS via CDN for rapid styling (In production, compile Tailwind)
    wp_enqueue_script( 'tailwindcss', 'https://cdn.tailwindcss.com', array(), '3.4.1', false );
    
    // Enqueue Main Stylesheet
    wp_enqueue_style( 'finconsult-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version') );
}
add_action( 'wp_enqueue_scripts', 'finconsult_scripts' );

/**
 * Customizer settings for Theme Options
 */
function finconsult_customize_register( $wp_customize ) {
    // Add Theme Options Panel
    $wp_customize->add_panel( 'finconsult_options', array(
        'title'       => __( 'Theme Options', 'finconsult' ),
        'priority'    => 130,
    ) );

    // Add Contact Info Section
    $wp_customize->add_section( 'finconsult_contact_info', array(
        'title'       => __( 'Contact Information', 'finconsult' ),
        'panel'       => 'finconsult_options',
    ) );

    // Phone Number Setting
    $wp_customize->add_setting( 'finconsult_phone', array(
        'default'           => '+1 (234) 567-890',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'finconsult_phone', array(
        'label'    => __( 'Phone Number', 'finconsult' ),
        'section'  => 'finconsult_contact_info',
        'type'     => 'text',
    ) );
}
add_action( 'customize_register', 'finconsult_customize_register' );
