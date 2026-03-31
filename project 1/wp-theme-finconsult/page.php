<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main id="primary" class="site-main bg-white">
    
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        
        <!-- Page Header -->
        <header class="bg-slate-900 text-white py-16 md:py-20 lg:py-28 relative overflow-hidden">
            <div class="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-position: center; background-size: cover;"></div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <?php the_title( '<h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">', '</h1>' ); ?>
                
                <!-- Breadcrumbs (Simple implementation) -->
                <div class="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span class="text-blue-400"><?php the_title(); ?></span>
                </div>
            </div>
        </header>

        <!-- Page Content -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div class="max-w-4xl mx-auto">
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="mb-8 md:mb-12 rounded-sm overflow-hidden shadow-md">
                            <?php the_post_thumbnail( 'full', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content prose prose-slate prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
                        <?php
                        the_content();

                        wp_link_pages(
                            array(
                                'before' => '<div class="page-links mt-8 pt-4 border-t border-gray-100">' . esc_html__( 'Pages:', 'finconsult' ),
                                'after'  => '</div>',
                            )
                        );
                        ?>
                    </div>
                </article>
            </div>
        </div>

        <?php
    endwhile; // End of the loop.
    ?>

</main>

<?php
get_footer();
