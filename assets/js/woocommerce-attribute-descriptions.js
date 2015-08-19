jQuery(document).ready(function($) {
	
	$(this).on('click', '.woocommerce-attribute-icon', function(e) {
		
		e.preventDefault();
		
		$('.woocommerce-attribute-modal').find('.message').text($(this).data('description')).end().fadeToggle(300);
		
	});
	
	$(this).on('click', '.woocommerce-attribute-modal, .woocommerce-attribute-close', function(e) {
		
		if(e.target !== this) { return; }
		
		e.preventDefault();
		
		$('.woocommerce-attribute-modal').fadeToggle(300);
		
	});
	
});