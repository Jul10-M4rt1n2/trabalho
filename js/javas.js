//--------------------login----------------------

function enviar() {
			var user = document.form.login.value;
			var senha = document.form.senha.value;
			if (user == 'anita' && senha == '123') {
				alert("acessado");
				window.open('index.html');
			}else{
				alert("Acesso Negado Login incorreto");
			}
}
//-------------------fim login--------------------

//-------------------------media------------------
function calc() {
		var nota1 = parseFloat(document.formcalc.nota1.value);
		var nota2 = parseFloat(document.formcalc.nota2.value);
		var media = parseFloat((nota1+nota2)/2);
		if (media>=7) {
			alert("media do aluno :  "+ media+ " Aprovado");
		}else{
			alert("media do aluno :  "+ media+ " Reprovado");
		}
}
//----------------------------fim media----------------------------


//--------------------------boleto---------------------------

var desconto, valor,novo, total;
function bole() {
	
	valor = parseFloat(document.boleto.valor.value);
	alert("valor sem desconto "+valor);
	desconto = parseInt(document.boleto.desconto.value);
	switch(desconto){
		case 10:
			novo = valor * 0.10;
			total = valor-novo
			alert("Para o pagamento até o dia do vencimento");
			alert("Novo total: "+total);
			break;
		case 15:
			novo = valor*0.15;
			total = valor-novo
			alert("Para ex alunos");
			alert("Novo total: "+total);
			break;
		case 20:
			novo = valor*0.20;
			total = valor-novo
			alert("Para clientes com parceria com a empresa");
			alert("Novo total: "+total);
			break
		case 25:
			novo = valor*0.25;
			total = valor-novo
			alert("Desconto de grupo até a data do vencimento");
			alert("Novo total: "+total);
			break;
		default:
			alert("Incorreto desconto não informado");
	}
}