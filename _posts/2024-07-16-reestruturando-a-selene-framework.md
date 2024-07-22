---
layout: post
author: Canoi Gomes
title: Reestruturando a Selene Framework
type: Devlog
category: devlog
date: '2024-07-16T19:00:00-03:00'
tags:
  - lua
  - selene
  - devlog
  - pt-br
  - C
---
Já tem um tempo que sigo nessa empreitada de achar um formato interessante para essa lib. Como já comentei em uma postagem anterior, essa lib nasceu com uma proposta bem parecida com um LÖVE da vida, com um core todo escrito em C (como render e sistema de áudio) e um frontend em Lua que faz uso dessas estruturas.

Porém recentemente decidi abandonar essa ideia do core em C, e fazer a framework em Lua, ou seja, todo o renderer e seus tipos como Imagens, Canvas, Batch, entre outros. Com isso eu acabo deixando a funcionamento do meu executável bem simples, ele se torna apenas um wrapper para algumas libs como SDL2 e OpenGL, e embutido também há um pequeno script em Lua que vai ser responsável por fazer o "boot" da framework.

### Boot
O arquivo de boot é bem simples, ele vai adicionar o diretório onde está o executável e o adiciona à lista de diretórios onde o Lua busca pelos seus módulos (insere no `package.path`). Depois ele faz uma busca por um arquivo `main.lua`, esse arquivo só tem que retornar uma tabela com os seguintes campos: `step` e `quit`, onde ambas devem ser funções,  se forem qualquer outro tipo o programa retornará um erro. Seria algo assim:

```lua
-- main.lua
return {
	step = function()
		print('Print from lua')
	end,
	quit = function()
		print('Exiting..')
	end
}
```

A `step` é a função que é chamada no loop principal, e `quit` é chamada após o final do programa, é interessante para caso queira tratar algum objeto antes de finalizar.
### Plugins
A ideia inicial era ter um módulo `core/` escrito em Lua, contendo as estruturas básicas pra fazer um jogo (renderer, sistema de áudio, filesystem, window), e posteriormente outros módulos como `engine/` e `editor/`. Porém decidi transformar tudo em plugins, acho que isso facilita pra a galera que quiser expandir ou criar novos plugins.

A grande diferença aqui vai ser na forma como essas bibliotecas serão carregadas, vou colocar também um tabela com as dependências da lib (por exemplo, eu tenho uma biblioteca `math/` com algumas definições e operações para `Vec2`, `Vec3`, `Vec4` e `Mat4`, que são usadas pela biblioteca `graphics/`). A ideia é mais para frente ter um plugin de `builder/` onde eu possa fazer uso dessas informações sobre dependências para empacotar somente as bibliotecas necessárias. Mesma coisa para um plugin de `runner/`, a ideia é ser a estrutura de uso mais básico para se rodar um jogo, ou seja, será responsável por iniciar os módulos necessários, criar um loop principal e expor para o usuário somente as funções necessárias

A ideia é ter algo assim:
```lua
--- main.lua
local runner = selene.load_module('runner')
runner.init({window = {title = 'My Game'}})
return runner
```

Perceba que só retorno o runner, ou seja, essa tabela terá as funções de `step` e `quit`, então caso queira reescrever alguma dessas funções, criar um loop principal próprio, por exemplo, é bem simples de fazer.
### Empacotamento
Acho que vou acabar optando por usar o `.zip` como formato para empacotamento mesmo. Para isso vou implementar um wrapper no meu executável para permitir essas operações de encode e decode.

Mas isso fica mais pra frente.

### Próximos Passos
A ideia é que uma vez que esse sistema de plugin está funcionando com 100% de certeza para o básico. Atualmente conseguir transpor boa parte do core para plugins, e rodar alguns dos exemplos após adaptá-los.

Depois disso é começar a trabalhar nesse sistema de build, vou precisar ir atrás de alguma biblioteca de zip, implementar o wrapper em C no executável e após isso começar o builder em Lua.