    <footer class="bg-slate-900 text-slate-300 pt-20 mt-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Brand & Contact -->
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-2 mb-6">
                        <span class="font-bold text-xl text-white tracking-tight"><?php bloginfo( 'name' ); ?></span>
                    </div>
                    <p class="text-sm text-slate-400 mb-6">
                        <?php bloginfo( 'description' ); ?>
                    </p>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 text-sm">
                            <span><?php echo esc_html( get_theme_mod( 'finconsult_phone', '+1 (234) 567-890' ) ); ?></span>
                        </div>
                    </div>
                </div>

                <!-- Dynamic Footer Menu -->
                <div>
                    <h4 class="text-white font-bold mb-6">Quick Links</h4>
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer',
                            'menu_id'        => 'footer-menu',
                            'container'      => false,
                            'menu_class'     => 'space-y-3 text-sm',
                            'fallback_cb'    => false,
                        )
                    );
                    ?>
                </div>

                <!-- Newsletter (Static for theme demo) -->
                <div class="lg:col-span-2">
                    <h4 class="text-white font-bold mb-6">Newsletter</h4>
                    <p class="text-sm text-slate-400 mb-4">Subscribe to our newsletter to get latest updates and news.</p>
                    <form class="flex flex-col sm:flex-row gap-3">
                        <input type="email" placeholder="Email Address" class="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:border-blue-500 text-sm text-white">
                        <button type="button" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-medium transition-colors text-sm whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-sm text-slate-500">
                    &copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
