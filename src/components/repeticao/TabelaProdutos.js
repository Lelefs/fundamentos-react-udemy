import React from 'react';
import './TabelaProdutos.css';
import produtos from '../../data/produtos';

export default () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(produto => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
