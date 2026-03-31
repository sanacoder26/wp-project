<?php
/**
 * The template for displaying search results pages
 */

get_header();
?>

<main id="primary" class="site-main bg-gray-50 py-12 lg:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <?php if ( have_posts() ) : ?>

            <header class="page-header mb-16 text-center max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    <?php
                    /* translators: %s: search query. */
                    printf( esc_html__( 'Search Results for: %s', 'finconsult' ), '<span class="text-blue-600">"' . get_search_query() . '"</span>' );
                    ?>
                </h1>
                <div class="max-w-md mx-auto">
                    <?php get_search_form(); ?>
                </div>
            </header>

            <div class="space-y-6 md:space-y-8 max-w-4xl mx-auto">
                <?php
                while ( have_posts() ) :
                    the_post();
                    ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-sm shadow-sm p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start'); ?>>
                        
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="w-full md:w-1/3 flex-shrink-0 rounded-sm overflow-hidden">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail( 'medium', array( 'class' => 'w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-500' ) ); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="flex-grow">
                            <div class="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                                <?php 
                                $post_type = get_post_type();
                                if ( $post_type === 'post' ) {
                                    echo '<span class="text-blue-600">Blog Post</span>';
                                } elseif ( $post_type === 'page' ) {
                                    echo '<span class="text-emerald-600">Page</span>';
                                } else {
                                    echo '<span class="text-slate-600">' . esc_html( ucfirst( $post_type ) ) . '</span>';
                                }
                                ?>
                            </div>
                            
                            <h2 class="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                                <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
                            </h2>
                            
                            <div class="text-slate-600 mb-4 line-clamp-3">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                                Read More 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
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
                <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">No Results Found</h2>
                <p class="text-slate-600 mb-8 max-w-lg mx-auto">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                <div class="max-w-md mx-auto">
                    <?php get_search_form(); ?>
                </div>
            </div>

        <?php endif; ?>

    </div>
</main>

<?php
get_footer();
