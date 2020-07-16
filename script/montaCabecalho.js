function montaCabecalho() {
    let modeloCabecalho = document.getElementById('modeloField').value;

    let dataSemana1 = document.getElementById('data-semana1').value;
    let dataSemana2 = document.getElementById('data-semana2').value;
    let dataSemana3 = document.getElementById('data-semana3').value;
    let dataSemana4 = document.getElementById('data-semana4').value;
    let dataSemana5 = document.getElementById('data-semana5').value;
    let dataSemana6 = document.getElementById('data-semana6').value;
    let dataSemana7 = document.getElementById('data-semana7').value;
    let dataSemana8 = document.getElementById('data-semana8').value;
  
    let temaSemana1 = document.getElementById('tema-semana1').value;
    let temaSemana2 = document.getElementById('tema-semana2').value;
    let temaSemana3 = document.getElementById('tema-semana3').value;
    let temaSemana4 = document.getElementById('tema-semana4').value;
    let temaSemana5 = document.getElementById('tema-semana5').value;
    let temaSemana6 = document.getElementById('tema-semana6').value;
    let temaSemana7 = document.getElementById('tema-semana7').value;
    let temaSemana8 = document.getElementById('tema-semana8').value;
  
    let linkSemana1 = document.getElementById('link-semana1').value;
    let linkSemana2 = document.getElementById('link-semana2').value;
    let linkSemana3 = document.getElementById('link-semana3').value;
    let linkSemana4 = document.getElementById('link-semana4').value;
    let linkSemana5 = document.getElementById('link-semana5').value;
    let linkSemana6 = document.getElementById('link-semana6').value;
    let linkSemana7 = document.getElementById('link-semana7').value;
    let linkSemana8 = document.getElementById('link-semana8').value;
  
    let nomeDisciplina = document.getElementById('disciplinaName').value;
    let bannerDisciplina = document.getElementById('bannerField').value;
    let cursoName = document.getElementById('curseField').value;
    let planoEnsino = document.getElementById('planoField').value;
  
    let qtdeHoras = document.getElementById('cargaHoraria').value;
    let horaSemana = document.getElementById('horaSemana').value;
    let dataProva = document.getElementById('dataProva').value;
    let data2Prova = document.getElementById('dataProva1').value;
  
    let cabecalho = {
      date1: dataSemana1, date2: dataSemana2, date3: dataSemana3, date4: dataSemana4,
      date5: dataSemana5, date6: dataSemana6, date7: dataSemana7, date8: dataSemana8,
      tema1: temaSemana1, tema2: temaSemana2, tema3: temaSemana3, tema4: temaSemana4,
      tema5: temaSemana5, tema6: temaSemana6, tema7: temaSemana7, tema8: temaSemana8,
      link1: linkSemana1, link2: linkSemana2, link3: linkSemana3, link4: linkSemana4,
      link5: linkSemana5, link6: linkSemana6, link7: linkSemana7, link8: linkSemana8,
      disciplina: nomeDisciplina, banner: bannerDisciplina, curso: cursoName,
      plano: planoEnsino, horas: qtdeHoras, horaSemana: horaSemana, prova: dataProva, prova2: data2Prova, modelo: modeloCabecalho
    }
 
    if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== ""
        && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemana !== ""
        && cabecalho.prova !== "" && cabecalho.prova2 == "" && cabecalho.tema1 !== ""
        && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== ""
        && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== ""
        && cabecalho.tema8 == "" && cabecalho.modelo !== "") {

        console.log('dentro do if 1')
        
        let copia = `
        <div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
        <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <h1 class="discipline-name">${cabecalho.disciplina}</h1>
        <h2 class="tipo">${cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style=${{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${cabecalho.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${cabecalho.horaSemana} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong>${transformaData(cabecalho.prova)[2]}/${transformaData2(cabecalho.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
        </div>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">${cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">${cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">${cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">${cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">${cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">${cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">${cabecalho.tema7}</h1>
      </div>`
        
        navigator.clipboard.writeText(copia)
        
        
        
    } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" 
              && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemana !== "" 
              && cabecalho.prova !== "" && cabecalho.prova2 !== "" && cabecalho.tema1 !== "" 
              && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" 
              && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== ""
              && cabecalho.tema8 == "" && cabecalho.modelo !== "") {

      console.log('dentro do if 2')
      let copia =  
      `<div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
      <h1 class="discipline-name">{cabecalho.disciplina}</h1>
      <h2 class="tipo">${cabecalho.modelo}</h2>
      <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
      <div class="planejamento-estudo">
        <h1>Planejamento de Estudos</h1>
        <p style=${{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${cabecalho.horas} horas</strong></p>
        <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${cabecalho.horaSemanal} horas/semana</strong></p>
        <hr />
        <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong>${transformaData(cabecalho.prova)[2]}/${transformaData2(cabecalho.prova)[1]}</strong> e <strong> ${transformaData(cabecalho.prova2)[2]}/${transformaData2(cabecalho.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
      </div>
      <br />
      <span class="semana-1">1</span>
      <h1 class="semana-1">${cabecalho.tema1}</h1>
      <span class="semana-2">2</span>
      <h1 class="semana-2">${cabecalho.tema2}</h1>
      <span class="semana-3">3</span>
      <h1 class="semana-3">${cabecalho.tema3}</h1>
      <span class="semana-4">4</span>
      <h1 class="semana-4">${cabecalho.tema4}</h1>
      <span class="semana-5">5</span>
      <h1 class="semana-5">${cabecalho.tema5}</h1>
      <span class="semana-6">6</span>
      <h1 class="semana-6">${cabecalho.tema6}</h1>
      <span class="semana-7">7</span>
      <h1 class="semana-7">${cabecalho.tema7}</h1>
     </div>`

     navigator.clipboard.writeText(copia)
    
    } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" 
              && cabecalho.plano !== "" && cabecalho.horas == "" && cabecalho.horaSemana == "0" 
              && cabecalho.prova == "" && cabecalho.prova2 == "" && cabecalho.tema1 !== "" 
              && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" 
              && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" 
              && cabecalho.tema8 == "" && cabecalho.modelo !== "") {

    console.log('dentro do if 3')

    let copia = 
    `<div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
    <h1 class="discipline-name">${cabecalho.disciplina}</h1>
    <h2 class="tipo">${cabecalho.modelo}</h2>
    <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
    <br />
    <span class="semana-1">1</span>
    <h1 class="semana-1">${cabecalho.tema1}</h1>
    <span class="semana-2">2</span>
    <h1 class="semana-2">${cabecalho.tema2}</h1>
    <span class="semana-3">3</span>
    <h1 class="semana-3">${cabecalho.tema3}</h1>
    <span class="semana-4">4</span>
    <h1 class="semana-4">${cabecalho.tema4}</h1>
    <span class="semana-5">5</span>
    <h1 class="semana-5">${cabecalho.tema5}</h1>
    <span class="semana-6">6</span>
    <h1 class="semana-6">${cabecalho.tema6}</h1>
    <span class="semana-7">7</span>
    <h1 class="semana-7">${cabecalho.tema7}</h1>
  </div>`

  navigator.clipboard.writeText(copia)
        
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" 
            && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemana !== "" 
            && cabecalho.prova !== "" && cabecalho.prova2 == "" && cabecalho.tema1 !== "" 
            && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" 
            && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" 
            && cabecalho.tema8 !== "" && cabecalho.modelo !== "" ) {

    console.log('dentro do if 4')

     let copia = 
     `<div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
     <h1 class="discipline-name">${cabecalho.disciplina}</h1>
     <h2 class="tipo">{cabecalho.modelo}</h2>
     <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
     <div class="planejamento-estudo">
       <h1>Planejamento de Estudos</h1>
       <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${cabecalho.horas} horas</strong></p>
       <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${cabecalho.horaSemanal} horas/semana</strong></p>
       <hr />
       <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong>${transformaData(cabecalho.prova)[2]}/${transformaData2(cabecalho.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
     </div>
     <br />
     <span class="semana-1">1</span>
     <h1 class="semana-1">${cabecalho.tema1}</h1>
     <span class="semana-2">2</span>
     <h1 class="semana-2">${cabecalho.tema2}</h1>
     <span class="semana-3">3</span>
     <h1 class="semana-3">${cabecalho.tema3}</h1>
     <span class="semana-4">4</span>
     <h1 class="semana-4">${cabecalho.tema4}</h1>
     <span class="semana-5">5</span>
     <h1 class="semana-5">${cabecalho.tema5}</h1>
     <span class="semana-6">6</span>
     <h1 class="semana-6">${cabecalho.tema6}</h1>
     <span class="semana-7">7</span>
     <h1 class="semana-7">${cabecalho.tema7}</h1>
     <span class="semana-8">8</span>
     <h1 class="semana-8">${cabecalho.tema8}</h1>
   </div>`
   
   navigator.clipboard.writeText(copia)
     
     
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" 
            && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemana !== "" 
            && cabecalho.prova !== "" && cabecalho.prova2 !== "" && cabecalho.tema1 !== "" 
            && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" 
            && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" 
            && cabecalho.tema8 !== "" && cabecalho.modelo !== "" ){

    console.log('dentro do if 5')

    let copia = 
    `<div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
    <h1 class="discipline-name">${cabecalho.disciplina}</h1>
    <h2 class="tipo">${cabecalho.modelo}</h2>
    <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
    <div class="planejamento-estudo">
      <h1>Planejamento de Estudos</h1>
      <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${cabecalho.horas} horas</strong></p>
      <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${cabecalho.horaSemana} horas/semana</strong></p>
      <hr />
      <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong>${transformaData(cabecalho.prova)[2]}/${transformaData2(cabecalho.prova)[1]}</strong> e <strong> ${transformaData(cabecalho.prova2)[2]}/${transformaData2(cabecalho.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
    </div>
    <br />
    <span class="semana-1">1</span>
    <h1 class="semana-1">${cabecalho.tema1}</h1>
    <span class="semana-2">2</span>
    <h1 class="semana-2">${cabecalho.tema2}</h1>
    <span class="semana-3">3</span>
    <h1 class="semana-3">${cabecalho.tema3}</h1>
    <span class="semana-4">4</span>
    <h1 class="semana-4">${cabecalho.tema4}</h1>
    <span class="semana-5">5</span>
    <h1 class="semana-5">${cabecalho.tema5}</h1>
    <span class="semana-6">6</span>
    <h1 class="semana-6">${cabecalho.tema6}</h1>
    <span class="semana-7">7</span>
    <h1 class="semana-7">${cabecalho.tema7}</h1>
    <span class="semana-8">8</span>
    <h1 class="semana-8">${cabecalho.tema8}</h1>
    </div>`

    navigator.clipboard.writeText(copia)

  } else if ( cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" 
            && cabecalho.plano !== "" && cabecalho.horas == "" && cabecalho.horaSemana == "0" 
            && cabecalho.prova == "" && cabecalho.prova2 == "" && cabecalho.tema1 !== "" 
            && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" 
            && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" 
            && cabecalho.tema8 !== "" && cabecalho.modelo !== "" ) {

    console.log('dentro do if 6')

    let copia = 
    `<div class="header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">${cabecalho.curso}</span>
    <h1 class="discipline-name">${cabecalho.disciplina}</h1>
    <h2 class="tipo">${cabecalho.modelo}</h2>
    <a class="btn btn-syllabus" target="_blank" href=${cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
    <br />
    <span class="semana-1">1</span>
    <h1 class="semana-1">${cabecalho.tema1}</h1>
    <span class="semana-2">2</span>
    <h1 class="semana-2">${cabecalho.tema2}</h1>
    <span class="semana-3">3</span>
    <h1 class="semana-3">${cabecalho.tema3}</h1>
    <span class="semana-4">4</span>
    <h1 class="semana-4">${cabecalho.tema4}</h1>
    <span class="semana-5">5</span>
    <h1 class="semana-5">${cabecalho.tema5}</h1>
    <span class="semana-6">6</span>
    <h1 class="semana-6">${cabecalho.tema6}</h1>
    <span class="semana-7">7</span>
    <h1 class="semana-7">${cabecalho.tema7}</h1>
    <span class="semana-8">8</span>
    <h1 class="semana-8">${cabecalho.tema8}</h1>
  </div>`

  navigator.clipboard.writeText(copia)


  } else{
        
        alert('Ops! Parece que algo deu errado! Por favor, preencha todos os dados obrigatórios do construtor da página de cabeçalho. Se ainda estiver com problemas, consulte o guia através do botão +Ajuda.')

    return(
      null
    )

  }
}

/* FUNÇÕES DE FORMATAÇÃO DE DATA*/

function transformaData(x){
  let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  let y = x.split('-');
  y[1] = meses[parseInt(y[1])-1];
  return(y);
}

function transformaData2(x){
  let meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let y = x.split('-');
  y[1] = meses[parseInt(y[1])-1];
  return(y);
}
