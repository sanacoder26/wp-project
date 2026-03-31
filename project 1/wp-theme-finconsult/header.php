<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class('font-sans text-slate-800 bg-white'); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header class="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2">
                    <?php if ( has_custom_logo() ) : ?>
                        <?php class_custom_logo(); ?>
                    <?php else : ?>
                        <div class="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                            <span class="text-white font-bold text-xl">F</span>
                        </div>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="font-bold text-xl tracking-tight text-slate-900">
                            <?php bloginfo( 'name' ); ?>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex space-x-8">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'menu-1',
                            'menu_id'        => 'primary-menu',
                            'container'      => false,
                            'menu_class'     => 'flex space-x-8 text-sm font-medium text-slate-600',
                            'fallback_cb'    => false,
                        )
                    );
                    ?>
                </nav>

                <!-- Right Actions (Desktop) -->
                <div class="hidden lg:flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <p class="text-xs text-slate-500">Call Us Anytime</p>
                            <p class="text-sm font-bold"><?php echo esc_html( get_theme_mod( 'finconsult_phone', '+1 (234) 567-890' ) ); ?></p>
                        </div>
                    </div>
                    <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-colors">
                        Contact Us
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-slate-600 hover:text-blue-600 focus:outline-none p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div class="px-4 pt-2 pb-6 space-y-1">
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'menu-1',
                        'container'      => false,
                        'menu_class'     => 'flex flex-col space-y-2 text-base font-medium text-slate-600',
                        'fallback_cb'    => false,
                    )
                );
                ?>
                <div class="mt-6 pt-6 border-t border-gray-100">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <p class="text-xs text-slate-500">Call Us Anytime</p>
                            <p class="text-sm font-bold"><?php echo esc_html( get_theme_mod( 'finconsult_phone', '+1 (234) 567-890' ) ); ?></p>
                        </div>
                    </div>
                    <a href="#contact" class="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm font-medium text-sm transition-colors w-full">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            
            if(btn && menu) {
                btn.addEventListener('click', function() {
                    menu.classList.toggle('hidden');
                });
            }
        });
    </script>

