<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<main id="primary" class="site-main bg-gray-50 py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-sm shadow-sm p-6 sm:p-8 md:p-12 mb-8'); ?>>
                
                <header class="entry-header mb-6 md:mb-8 border-b border-gray-100 pb-6 md:pb-8">
                    <?php
                    // Display categories
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) {
                        echo '<div class="mb-4">';
                        foreach( $categories as $category ) {
                            echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-sm mr-2 uppercase tracking-wider">' . esc_html( $category->name ) . '</a>';
                        }
                        echo '</div>';
                    }
                    
                    // Display Title
                    the_title( '<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">', '</h1>' );
                    ?>
                    
                    <div class="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-slate-500 mt-4 md:mt-6">
                        <div class="flex items-center gap-2">
                            <?php echo get_avatar( get_the_author_meta( 'ID' ), 32, '', '', array( 'class' => 'rounded-full' ) ); ?>
                            <span class="font-medium text-slate-700"><?php the_author(); ?></span>
                        </div>
                        <span class="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300"></span>
                        <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                    </div>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="mb-8 md:mb-10 rounded-sm overflow-hidden">
                        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content prose prose-slate prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700">
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

                <footer class="entry-footer mt-12 pt-8 border-t border-gray-100">
                    <?php
                    // Display Tags
                    $tags = get_the_tags();
                    if ( $tags ) {
                        echo '<div class="flex flex-wrap gap-2 items-center"><span class="text-sm font-medium text-slate-700 mr-2">Tags:</span>';
                        foreach ( $tags as $tag ) {
                            echo '<a href="' . esc_url( get_tag_link( $tag->term_id ) ) . '" class="text-xs text-slate-600 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-sm transition-colors">' . esc_html( $tag->name ) . '</a>';
                        }
                        echo '</div>';
                    }
                    ?>
                </footer>
                
            </article>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                echo '<div class="bg-white rounded-sm shadow-sm p-8 md:p-12">';
                comments_template();
                echo '</div>';
            endif;

        endwhile; // End of the loop.
        ?>

    </div>
</main>

<?php
get_footer();
