/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} tabindex="0">
            <div className={ blockProps.className + '__head' }>
                <RichText.Content tagName="h3" value={attributes.title} className={blockProps.className + '__title'} />
                
                <div className={blockProps.className + '__close'}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.00100708H6V6.00101H0V8.00101H6V14.001H8V8.00101H14V6.00101H8V0.00100708Z" fill="black" /></svg>
                </div>
            </div>

            <RichText.Content tagName="p" value={ attributes.content } className={ blockProps.className + '__content' } />
        </div>
    );
}