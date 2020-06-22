import React from 'react';

import './App.css';

import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import ComParametro from './components/basicos/ComParametro';
import Contador from './components/contador/Contador';
import DiretaPai from './components/comunicacao/DiretaPai';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import IndiretaPai from './components/comunicacao/IndiretaPai.js';
import Input from './components/formulario/Input';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ParOuImpar from './components/condicional/ParOuImpar';
import Primeiro from './components/basicos/Primeiro';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import UsuarioInfo from './components/condicional/UsuarioInfo';

export default () => (
  <div className="app">
    <h1>Fundamentos React (Arrow)</h1>

    <div className="cards">
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Componente controlado (Input)" color="#E45F56">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação direta" color="#59323C">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={11} />
        <UsuarioInfo usuario={{ nome: 'Leandro' }} />
        <UsuarioInfo usuario={{ email: 'lefinochio@hotmail.com' }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio aleatório" color="#FA6900">
        <Aleatorio min={1} max={10} />
      </Card>

      <Card titulo="#02 - Com parâmetro" color="#E8B71A">
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
