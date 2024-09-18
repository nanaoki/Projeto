function paresObjeto(obj) {
    return Object.entries(obj);
  }

  console.log(paresObjeto({nome:'João', idade: 30, profissão: 'professor'}))