<?php
/**
 * The template for displaying archive pages
 */

get_header();
?>

<main id="primary" class="site-main bg-gray-50 py-12 lg:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <?php if ( have_posts() ) : ?>

            <header class="page-header mb-16 text-center max-w-3xl mx-auto">
                <?php
                the_archive_title( '<h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">', '</h1>' );
                the_archive_description( '<div class="text-lg text-slate-600">', '</div>' );
                ?>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <?php
                while ( have_posts() ) :
                    the_post();
                    ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full'); ?>>
                        
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="overflow-hidden h-56 relative">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' ) ); ?>
                                </a>
                                <?php
                                $categories = get_the_category();
                                if ( ! empty( $categories ) ) {
                                    echo '<div class="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-slate-900 rounded-sm shadow-sm">';
                                    echo esc_html( $categories[0]->name );
                                    echo '</div>';
                                }
                                ?>
                            </div>
                        <?php endif; ?>

                        <div class="p-6 flex flex-col flex-grow">
                            <div class="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                                <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span class="font-medium"><?php the_author(); ?></span>
                            </div>
                            
                            <h2 class="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
                            </h2>
                            
                            <div class="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <div class="mt-auto pt-4 border-t border-gray-100">
                                <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-slate-900 font-medium text-sm group-hover:text-blue-600 transition-colors">
                                    Read Full Article 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    <?php
                endwhile;
                ?>
            </div>

            <!-- Pagination -->
            <div class="mt-16 flex justify-center">
                <?php
                the_posts_pagination(
                    array(
                        'mid_size'  => 2,
                        'prev_text' => __( '&larr; Previous', 'finconsult' ),
                        'next_text' => __( 'Next &rarr;', 'finconsult' ),
                        'class'     => 'pagination-links flex gap-2',
                    )
                );
                ?>
            </div>

        <?php else : ?>
            
            <div class="text-center py-20">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Nothing Found</h2>
                <p class="text-slate-600">It seems we can't find what you're looking for. Perhaps searching can help.</p>
                <div class="mt-8 max-w-md mx-auto">
                    <?php get_search_form(); ?>
                </div>
            </div>

        <?php endif; ?>

    </div>
</main>

<?php
get_footer();
