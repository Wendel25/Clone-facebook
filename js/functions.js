$(function(){

	abrirModal();
	fecharModal();

	//Abre modal
	function abrirModal(){
		$('#bg').click(function(e){
			e.stopPropagation();
			$('.container-man').fadeIn();
		});		
	}

	//Fecha modal
	function fecharModal(){
		var el = $('.color-btn');

		el.click(function(){
			$('.container-man').fadeOut();
		})
		$('.fecharOTrem').click(function(e){
			e.stopPropagation();
		})
	}

	
});