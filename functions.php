<?
//Loading jQuery in footer
function jquery_enqueue() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", false, null, true);
    wp_enqueue_script('jquery');
}
if (!is_admin()) add_action("wp_enqueue_scripts", "jquery_enqueue", 11);
function add_styles() {
    wp_enqueue_style('bootstrap', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css', array(), null);
    wp_enqueue_style('wp-gulp', get_stylesheet_uri(), array(), null);
    wp_enqueue_script('bootstrap-js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js', array('jquery'), null, true);
    wp_enqueue_script('wp-gulp-js', get_stylesheet_directory_uri() . '/js/scripts.min.js', array('jquery'), null, true);
}
function my_deregister_scripts() {
    wp_deregister_script( 'wp-embed' );
}
add_action('wp_footer', 'my_deregister_scripts');
add_action('wp_enqueue_scripts', 'add_styles');
?>
