<?php
/**
 * Plugin Name:       Accordion
 * Description:       A Gutenberg block for creating collapsible accordions.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Victor Shershnyov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accordion
 *
 * @package           accordion
 */

function accordion_accordion_block_init() {
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion-item' );
}
add_action( 'init', 'accordion_accordion_block_init' );
