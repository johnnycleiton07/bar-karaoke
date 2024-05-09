// Array de nomes de clientes
const nomesClientes = ["JN56", "TR89", "PM90", "RS12", "LV76", "CM28", "AB77", "EM00", "JC27", "IY44"];

// Função para exibir os nomes dos clientes na lista
function exibirNomesClientes() {
    // Seleciona o elemento da lista de clientes
    const listaClientes = document.getElementById("lista-clientes");

    // Limpa o conteúdo da lista
    listaClientes.innerHTML = "";

    // Itera sobre o array de nomes de clientes e os adiciona à lista
    nomesClientes.forEach((nome, index) => {
        // Cria um novo elemento de lista
        const itemLista = document.createElement("li");
        // Define o texto do item da lista com o número e o nome do cliente
        itemLista.textContent = `${index + 1} - ${nome}`;
        // Adiciona o item da lista à lista de clientes
        listaClientes.appendChild(itemLista);
    });
}

// Chama a função para exibir os nomes dos clientes quando a página carrega
window.onload = exibirNomesClientes;
