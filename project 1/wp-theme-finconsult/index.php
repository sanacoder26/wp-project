<?php
/**
 * The main template file
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style="background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-position: center; background-size: cover;"></div>
        
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content -->
                <div class="max-w-2xl">
                    <div class="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30">
                        Welcome to <?php bloginfo( 'name' ); ?>
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Strategic Finance & Consulting Solutions for Lasting Impact.
                    </h1>
                    <p class="text-lg text-slate-300 mb-8 max-w-xl">
                        We help businesses navigate complex financial landscapes with tailored strategies, expert insights, and actionable solutions for sustainable growth.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#contact" class="btn-primary">Get Free Consultation</a>
                        <a href="#about" class="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-sm font-medium transition-colors inline-block">Learn More</a>
                    </div>
                </div>

                <!-- Right Form Card -->
                <div class="lg:ml-auto w-full max-w-md">
                    <div class="bg-white rounded-sm shadow-xl p-8 text-slate-800">
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Book free consultation</h3>
                        <p class="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you shortly.</p>
                        
                        <!-- Note: In a real WP theme, you would use a shortcode here like [wpforms id="1"] -->
                        <form class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-medium text-slate-700 mb-1">First Name</label>
                                    <input type="text" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="John">
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
                                    <input type="text" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="Doe">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="john@example.com">
                            </div>
                            <button type="button" class="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-sm font-medium transition-colors mt-2">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-slate-900 text-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div class="max-w-2xl">
                    <div class="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2">Our Services</div>
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Comprehensive Financial Solutions.</h2>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <!-- Service 1 -->
                <div class="card bg-slate-800 overflow-hidden">
                    <div class="p-6 md:p-8">
                        <h3 class="text-xl font-bold mb-3 text-white">Branding Consulting</h3>
                        <p class="text-slate-400 text-sm mb-6">Build a strong, recognizable brand identity that resonates with your target audience and stands out in the market.</p>
                    </div>
                </div>
                <!-- Service 2 -->
                <div class="card bg-slate-800 overflow-hidden">
                    <div class="p-6 md:p-8">
                        <h3 class="text-xl font-bold mb-3 text-white">Financial Consulting</h3>
                        <p class="text-slate-400 text-sm mb-6">Optimize your financial operations, manage risks, and develop strategies for sustainable long-term growth.</p>
                    </div>
                </div>
                <!-- Service 3 -->
                <div class="card bg-slate-800 overflow-hidden">
                    <div class="p-6 md:p-8">
                        <h3 class="text-xl font-bold mb-3 text-white">Market Research</h3>
                        <p class="text-slate-400 text-sm mb-6">Gain deep insights into market trends, consumer behavior, and competitive landscapes to make informed decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section class="section-padding bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Latest Industry News</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <?php
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post();
                        ?>
                        <div class="card bg-white p-6">
                            <h3 class="text-xl font-bold text-slate-900 mb-4"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <div class="text-sm text-slate-500 mb-4"><?php the_excerpt(); ?></div>
                            <a href="<?php the_permalink(); ?>" class="text-blue-600 font-medium text-sm">Read More &rarr;</a>
                        </div>
                        <?php
                    endwhile;
                    the_posts_navigation();
                else :
                    echo '<p>No posts found.</p>';
                endif;
                ?>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
