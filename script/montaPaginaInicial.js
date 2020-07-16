<<<<<<< HEAD
function montaPaginaInicial() {
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
  
    let apresentacaoLink = document.getElementById('videoLink').value;
    let downloadField = document.getElementById('downloadLink').value;
    let downloadTratadoField = downloadField.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");
  
    let qtdeHoras = document.getElementById('cargaHoraria').value;
    let horaSemana = document.getElementById('horaSemana').value;
    let dataProva = document.getElementById('dataProva').value;
    let data2Prova = document.getElementById('dataProva1').value;
  
    let profName = document.getElementById('professorName').value;
    let profImg = document.getElementById('professorFoto').value;
    let curriculoProf = document.getElementById('curriculoField').value
  
    let resumoVisual = document.getElementById('resumoVisual1').value
  
    let menuSemanas = {
      date1: dataSemana1, date2: dataSemana2, date3: dataSemana3, date4: dataSemana4,
      date5: dataSemana5, date6: dataSemana6, date7: dataSemana7, date8: dataSemana8,
      tema1: temaSemana1, tema2: temaSemana2, tema3: temaSemana3, tema4: temaSemana4,
      tema5: temaSemana5, tema6: temaSemana6, tema7: temaSemana7, tema8: temaSemana8,
      link1: linkSemana1, link2: linkSemana2, link3: linkSemana3, link4: linkSemana4,
      link5: linkSemana5, link6: linkSemana6, link7: linkSemana7, link8: linkSemana8,
      disciplina: nomeDisciplina, banner: bannerDisciplina, curso: cursoName,
      plano: planoEnsino, video: apresentacaoLink, download: downloadTratadoField, 
      horas: qtdeHoras, horaSemana: horaSemana, prova: dataProva, prova2: data2Prova,
      professor: profName, foto: profImg, curriculo: curriculoProf, resumo: resumoVisual
    }
      // TopoSemanasSemVideo 7
    if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
      && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
      && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
      && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
      && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
      && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
      && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
      && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
      && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
      && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
      && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
      && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
      && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {
        
        console.log(" TopoSemanasSemVideo 7")
        console.log(menuSemanas)
        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)
      
      // TopoSemanasSemVideoComResumo 7

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
                && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {
        
        console.log("TopoSemanasSemVideoComResumo 7")
        console.log(menuSemanas)
        let copia =
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)

      // TopoSemanasSemVideoComResumo 8

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
                && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

        console.log("TopoSemanasSemVideoComResumo 8")
        console.log(menuSemanas)
        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style="marginTop:0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
              <div class="container title semana-8 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date8)[2]}
                  <br />
                  ${transformaData(menuSemanas.date8)[1]}
                  <span>
                  ${transformaData(menuSemanas.date8)[0]}
                  </span>
                </div>
                <span>8</span>
                <h1>${menuSemanas.tema8}</h1>
                <a class="overlay" href=${menuSemanas.link8}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)


      // TopoSemanasSemVideo2DatasComResumo 7

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
                && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

        console.log("TopoSemanasSemVideo2DatasComResumo 7")
        console.log(menuSemanas)

        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)

      // TopoSemanasSemVideo2DatasComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" 
            && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

      console.log("TopoSemanasSemVideo2DatasComResumo 8 ")
      console.log(menuSemanas)

      let copia = 
      `<div class="graduation">
      <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
        <div class="container">
          <div><span class="course-name">${menuSemanas.curso}</span>
            <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
          </div>
          <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
        </div>
      </div>
      <div class="planejamento-estudo">
        <h1>Planejamento de Estudos</h1>
        <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
        <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
        <hr />
        <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
        <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
          <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
            href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
      </div>
      <div class="intro">
        <div class="container">
          <div class="container">
            <h2>Formador</h2>
            <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
              <div>
                <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                <h4>Autor</h4>
                <p>${menuSemanas.curriculo}</p>
              </div>
            </div>
          </div>
          <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
            <div class="resumo-visual">
            <div>
            <h3>Resumo Visual da Disciplina</h3>
            <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
            </div>
            <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
            </div>
          </a>
          <div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
            <div class="container title semana-8 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date8)[2]}
                <br />
                ${transformaData(menuSemanas.date8)[1]}
                <span>
                ${transformaData(menuSemanas.date8)[0]}
                </span>
              </div>
              <span>8</span>
              <h1>${menuSemanas.tema8}</h1>
              <a class="overlay" href=${menuSemanas.link8}></a>
            </div>
          </div>
        </div>
      </div>
    </div>`
      navigator.clipboard.writeText(copia)


    // TopoSemanasSemVideo2Datas 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
            && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

    console.log("TopoSemanasSemVideo2Datas 7")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="planejamento-estudo">
      <h1>Planejamento de Estudos</h1>
      <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
      <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
      <hr />
      <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
      <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
        <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
          href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
    </div>
    <div class="intro">
      <div class="container">
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)
    

  // TopoSemanasSemVideo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

  console.log("TopoSemanasSemVideo 8")
  console.log(menuSemanas)

  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="planejamento-estudo">
    <h1>Planejamento de Estudos</h1>
    <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
    <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
    <hr />
    <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
    <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
      <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
        href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
  </div>
  <div class="intro">
    <div class="container">
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
        <div class="container title semana-8 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date8)[2]}
            <br />
            ${transformaData(menuSemanas.date8)[1]}
            <span>
            ${transformaData(menuSemanas.date8)[0]}
            </span>
          </div>
          <span>8</span>
          <h1>${menuSemanas.tema8}</h1>
          <a class="overlay" href=${menuSemanas.link8}></a>
        </div>
      </div>
    </div>
  </div>
</div>`
  navigator.clipboard.writeText(copia)
  

  // TopoSemanasSemVideo2Datas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

  console.log("TopoSemanasSemVideo2Datas 8")
  console.log(menuSemanas)

  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="planejamento-estudo">
    <h1>Planejamento de Estudos</h1>
    <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
    <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
    <hr />
    <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
    <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
      <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
        href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
  </div>
  <div class="intro">
    <div class="container">
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
        <div class="container title semana-8 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date8)[2]}
            <br />
            ${transformaData(menuSemanas.date8)[1]}
            <span>
            ${transformaData(menuSemanas.date8)[0]}
            </span>
          </div>
          <span>8</span>
          <h1>${menuSemanas.tema8}</h1>
          <a class="overlay" href=${menuSemanas.link8}></a>
        </div>
      </div>
    </div>
  </div>`
  navigator.clipboard.writeText(copia)


  //TopoSemanasSemEstudo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== ""
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== ""
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == ""
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== ""
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== ""
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== ""
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== ""
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== ""
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== ""
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == ""
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

  console.log("TopoSemanasSemEstudo 7")
  console.log(menuSemanas)
  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="intro">
    <div class="container">
    <h2>Apresenta&ccedil;&atilde;o</h2>
    <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
    <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
      </div>
    </div>
  </div>
</div>`
  navigator.clipboard.writeText(copia)

    // TopoSemanasSemEstudo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {
  
    console.log("TopoSemanasSemEstudo 8")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="intro">
      <div class="container">
      <h2>Apresenta&ccedil;&atilde;o</h2>
      <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
      <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
          <div class="container title semana-8 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date8)[2]}
              <br />
              ${transformaData(menuSemanas.date8)[1]}
              <span>
              ${transformaData(menuSemanas.date8)[0]}
              </span>
            </div>
            <span>8</span>
            <h1>${menuSemanas.tema8}</h1>
            <a class="overlay" href=${menuSemanas.link8}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)

    // TopoSemanasSemEstudoComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

    console.log("TopoSemanasSemEstudoComResumo 7")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="intro">
      <div class="container">
      <h2>Apresentação</h2>
      <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
      <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
          <div class="resumo-visual">
          <div>
          <h3>Resumo Visual da Disciplina</h3>
          <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
          </div>
          <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
          </div>
        </a>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)
      // TopoSemanasSemEstudoComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){
              
              console.log("TopoSemanasSemEstudoComResumo 8")
              console.log(menuSemanas)
              let copia = 
              `<div class="graduation">
              <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
                <div class="container">
                  <div><span class="course-name">${menuSemanas.curso}</span>
                    <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                  </div>
                  <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
                </div>
              </div>
              <div class="intro">
                <div class="container">
                <h2>Apresentação</h2>
                <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
                <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                  <div class="container">
                    <h2>Formador</h2>
                    <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                      <div>
                        <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                        <h4>Autor</h4>
                        <p>${menuSemanas.curriculo}</p>
                      </div>
                    </div>
                  </div>
                  <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                    <div class="resumo-visual">
                    <div>
                    <h3>Resumo Visual da Disciplina</h3>
                    <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                    </div>
                    <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                    </div>
                  </a>
                  <div class="container desbloqueio">
                    <h2>Menu das Semanas</h2>
                    <div class="container title semana-1 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date1)[2]}
                        <br />
                        ${transformaData(menuSemanas.date1)[1]}
                        <span>
                        ${transformaData(menuSemanas.date1)[0]}
                        </span>
                      </div>
                      <span>1</span>
                      <h1>${menuSemanas.tema1}</h1>
                      <a class="overlay" href=${menuSemanas.link1}></a>
                    </div>
                    <div class="container title semana-2 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date2)[2]}
                        <br />
                        ${transformaData(menuSemanas.date2)[1]}
                        <span>
                        ${transformaData(menuSemanas.date2)[0]}
                        </span>
                      </div>
                      <span>2</span>
                      <h1>${menuSemanas.tema2}</h1>
                      <a class="overlay" href=${menuSemanas.link2}></a>
                    </div>
                    <div class="container title semana-3 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date3)[2]}
                        <br />
                        ${transformaData(menuSemanas.date3)[1]}
                        <span>
                        ${transformaData(menuSemanas.date3)[0]}
                        </span>
                      </div>
                      <span>3</span>
                      <h1>${menuSemanas.tema3}</h1>
                      <a class="overlay" href=${menuSemanas.link3}></a>
                    </div>
                    <div class="container title semana-4 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date4)[2]}
                        <br />
                        ${transformaData(menuSemanas.date4)[1]}
                        <span>
                        ${transformaData(menuSemanas.date4)[0]}
                        </span>
                      </div>
                      <span>4</span>
                      <h1>${menuSemanas.tema4}</h1>
                      <a class="overlay" href=${menuSemanas.link4}></a>
                    </div>
                    <div class="container title semana-5 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date5)[2]}
                        <br />
                        ${transformaData(menuSemanas.date5)[1]}
                        <span>
                        ${transformaData(menuSemanas.date5)[0]}
                        </span>
                      </div>
                      <span>5</span>
                      <h1>${menuSemanas.tema5}</h1>
                      <a class="overlay" href=${menuSemanas.link5}></a>
                    </div>
                    <div class="container title semana-6 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date6)[2]}
                        <br />
                        ${transformaData(menuSemanas.date6)[1]}
                        <span>
                        ${transformaData(menuSemanas.date6)[0]}
                        </span>
                      </div>
                      <span>6</span>
                      <h1>${menuSemanas.tema6}</h1>
                      <a class="overlay" href=${menuSemanas.link6}></a>
                    </div>
                    <div class="container title semana-7 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date7)[2]}
                        <br />
                        ${transformaData(menuSemanas.date7)[1]}
                        <span>
                        ${transformaData(menuSemanas.date7)[0]}
                        </span>
                      </div>
                      <span>7</span>
                      <h1>${menuSemanas.tema7}</h1>
                      <a class="overlay" href=${menuSemanas.link7}></a>
                    </div>
                    <div class="container title semana-8 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date8)[2]}
                        <br />
                        ${transformaData(menuSemanas.date8)[1]}
                        <span>
                        ${transformaData(menuSemanas.date8)[0]}
                        </span>
                      </div>
                      <span>8</span>
                      <h1>${menuSemanas.tema8}</h1>
                      <a class="overlay" href=${menuSemanas.link8}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
              navigator.clipboard.writeText(copia)
                // TopoSemanasSemPlanejamento_e_Video 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== ""
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

              console.log("TopoSemanasSemPlanejamento_e_Video 7")
              console.log(menuSemanas)

              let copia = 
              `<div class="graduation">
              <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
                <div class="container">
                  <div><span class="course-name">${menuSemanas.curso}</span>
                    <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                  </div>
                  <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
                </div>
              </div>
              <div class="intro">
                <div class="container">
                  <div class="container">
                    <h2>Formador</h2>
                    <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                      <div>
                        <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                        <h4>Autor</h4>
                        <p>${menuSemanas.curriculo}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container desbloqueio">
                    <h2>Menu das Semanas</h2>
                    <div class="container title semana-1 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date1)[2]}
                        <br />
                        ${transformaData(menuSemanas.date1)[1]}
                        <span>
                        ${transformaData(menuSemanas.date1)[0]}
                        </span>
                      </div>
                      <span>1</span>
                      <h1>${menuSemanas.tema1}</h1>
                      <a class="overlay" href=${menuSemanas.link1}></a>
                    </div>
                    <div class="container title semana-2 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date2)[2]}
                        <br />
                        ${transformaData(menuSemanas.date2)[1]}
                        <span>
                        ${transformaData(menuSemanas.date2)[0]}
                        </span>
                      </div>
                      <span>2</span>
                      <h1>${menuSemanas.tema2}</h1>
                      <a class="overlay" href=${menuSemanas.link2}></a>
                    </div>
                    <div class="container title semana-3 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date3)[2]}
                        <br />
                        ${transformaData(menuSemanas.date3)[1]}
                        <span>
                        ${transformaData(menuSemanas.date3)[0]}
                        </span>
                      </div>
                      <span>3</span>
                      <h1>${menuSemanas.tema3}</h1>
                      <a class="overlay" href=${menuSemanas.link3}></a>
                    </div>
                    <div class="container title semana-4 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date4)[2]}
                        <br />
                        ${transformaData(menuSemanas.date4)[1]}
                        <span>
                        ${transformaData(menuSemanas.date4)[0]}
                        </span>
                      </div>
                      <span>4</span>
                      <h1>${menuSemanas.tema4}</h1>
                      <a class="overlay" href=${menuSemanas.link4}></a>
                    </div>
                    <div class="container title semana-5 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date5)[2]}
                        <br />
                        ${transformaData(menuSemanas.date5)[1]}
                        <span>
                        ${transformaData(menuSemanas.date5)[0]}
                        </span>
                      </div>
                      <span>5</span>
                      <h1>${menuSemanas.tema5}</h1>
                      <a class="overlay" href=${menuSemanas.link5}></a>
                    </div>
                    <div class="container title semana-6 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date6)[2]}
                        <br />
                        ${transformaData(menuSemanas.date6)[1]}
                        <span>
                        ${transformaData(menuSemanas.date6)[0]}
                        </span>
                      </div>
                      <span>6</span>
                      <h1>${menuSemanas.tema6}</h1>
                      <a class="overlay" href=${menuSemanas.link6}></a>
                    </div>
                    <div class="container title semana-7 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date7)[2]}
                        <br />
                        ${transformaData(menuSemanas.date7)[1]}
                        <span>
                        ${transformaData(menuSemanas.date7)[0]}
                        </span>
                      </div>
                      <span>7</span>
                      <h1>${menuSemanas.tema7}</h1>
                      <a class="overlay" href=${menuSemanas.link7}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
              navigator.clipboard.writeText(copia)

  // TopoSemanasSemPlanejamento_e_Video 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == ""
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){
              console.log("TopoSemanasSemPlanejamento_e_Video 8")
              console.log(menuSemanas)

              let copia = 
              `<div class="graduation">
              <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
                <div class="container">
                  <div><span class="course-name">${menuSemanas.curso}</span>
                    <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                  </div>
                  <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
                </div>
              </div>
              <div class="intro">
                <div class="container">
                  <div class="container">
                    <h2>Formador</h2>
                    <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                      <div>
                        <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                        <h4>Autor</h4>
                        <p>${menuSemanas.curriculo}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container desbloqueio">
                    <h2>Menu das Semanas</h2>
                    <div class="container title semana-1 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date1)[2]}
                        <br />
                        ${transformaData(menuSemanas.date1)[1]}
                        <span>
                        ${transformaData(menuSemanas.date1)[0]}
                        </span>
                      </div>
                      <span>1</span>
                      <h1>${menuSemanas.tema1}</h1>
                      <a class="overlay" href=${menuSemanas.link1}></a>
                    </div>
                    <div class="container title semana-2 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date2)[2]}
                        <br />
                        ${transformaData(menuSemanas.date2)[1]}
                        <span>
                        ${transformaData(menuSemanas.date2)[0]}
                        </span>
                      </div>
                      <span>2</span>
                      <h1>${menuSemanas.tema2}</h1>
                      <a class="overlay" href=${menuSemanas.link2}></a>
                    </div>
                    <div class="container title semana-3 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date3)[2]}
                        <br />
                        ${transformaData(menuSemanas.date3)[1]}
                        <span>
                        ${transformaData(menuSemanas.date3)[0]}
                        </span>
                      </div>
                      <span>3</span>
                      <h1>${menuSemanas.tema3}</h1>
                      <a class="overlay" href=${menuSemanas.link3}></a>
                    </div>
                    <div class="container title semana-4 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date4)[2]}
                        <br />
                        ${transformaData(menuSemanas.date4)[1]}
                        <span>
                        ${transformaData(menuSemanas.date4)[0]}
                        </span>
                      </div>
                      <span>4</span>
                      <h1>${menuSemanas.tema4}</h1>
                      <a class="overlay" href=${menuSemanas.link4}></a>
                    </div>
                    <div class="container title semana-5 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date5)[2]}
                        <br />
                        ${transformaData(menuSemanas.date5)[1]}
                        <span>
                        ${transformaData(menuSemanas.date5)[0]}
                        </span>
                      </div>
                      <span>5</span>
                      <h1>${menuSemanas.tema5}</h1>
                      <a class="overlay" href=${menuSemanas.link5}></a>
                    </div>
                    <div class="container title semana-6 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date6)[2]}
                        <br />
                        ${transformaData(menuSemanas.date6)[1]}
                        <span>
                        ${transformaData(menuSemanas.date6)[0]}
                        </span>
                      </div>
                      <span>6</span>
                      <h1>${menuSemanas.tema6}</h1>
                      <a class="overlay" href=${menuSemanas.link6}></a>
                    </div>
                    <div class="container title semana-7 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date7)[2]}
                        <br />
                        ${transformaData(menuSemanas.date7)[1]}
                        <span>
                        ${transformaData(menuSemanas.date7)[0]}
                        </span>
                      </div>
                      <span>7</span>
                      <h1>${menuSemanas.tema7}</h1>
                      <a class="overlay" href=${menuSemanas.link7}></a>
                    </div>
                    <div class="container title semana-8 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date8)[2]}
                        <br />
                        ${transformaData(menuSemanas.date8)[1]}
                        <span>
                        ${transformaData(menuSemanas.date8)[0]}
                        </span>
                      </div>
                      <span>8</span>
                      <h1>${menuSemanas.tema8}</h1>
                      <a class="overlay" href=${menuSemanas.link8}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
              navigator.clipboard.writeText(copia)
      // TopoSemanasSemPlanejamento_e_Video_ComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanasSemPlanejamento_e_Video_ComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="intro">
              <div class="container">
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

      // TopoSemanasSemPlanejamento_e_Video_ComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanasSemPlanejamento_e_Video_ComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="intro">
              <div class="container">
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanasComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanasComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2Datas 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas2Datas 7")
            console.log(menuSemanas)

            let copia = `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2DatasComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas2DatasComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanasComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanasComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2Datas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas2Datas 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // TopoSemanas2DatasComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas2DatasComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style="marginTop: 0;">Esta disciplina é de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Está previsto que você use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina será aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exceção</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina é calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="Média das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="Média Final">MF</span><a class="" style="marginLeft: 18%; textDecoration: none;" title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresentação</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style="textDecoration: none;">
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style="maxWidth: 850px;" src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`

          // MenuSemanasOnly 1
            navigator.clipboard.writeText(copia)
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == ""
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 == "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 == "" && menuSemanas.tema3 == "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 == "" 
          && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 1")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 2
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 == "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 2")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)


            // MenuSemanasOnly 3
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 == ""
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
          && menuSemanas.link3 !== "" && menuSemanas.link4 == "" && menuSemanas.link5 == ""
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 3")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 4
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 4")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 5
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == ""
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 5")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 6
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 6")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 7
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 8
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("MenuSemanasOnly 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
            <div class="container title semana-8 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date8)[2]}
                <br />
                ${transformaData(menuSemanas.date8)[1]}
                <span>
                ${transformaData(menuSemanas.date8)[0]}
                </span>
              </div>
              <span>8</span>
              <h1>${menuSemanas.tema8}</h1>
              <a class="overlay" href=${menuSemanas.link8}></a>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)
          
    } else {

          alert('Ops! Parece que algo deu errado! Por favor, preencha todos os dados obrigatórios* ou pelo menos a primeira semana da seção "Menu Semanas". Se ainda estiver com problemas, consulte o guia através do botão +Ajuda.');
      
          return (
            null
          )
    }
  } 
  
  
  
  // -------------------------- FUNÇÕES -------------------------------------
  
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
=======
function montaPaginaInicial() {
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
  
    let apresentacaoLink = document.getElementById('videoLink').value;
    let downloadField = document.getElementById('downloadLink').value;
    let downloadTratadoField = downloadField.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");
  
    let qtdeHoras = document.getElementById('cargaHoraria').value;
    let horaSemana = document.getElementById('horaSemana').value;
    let dataProva = document.getElementById('dataProva').value;
    let data2Prova = document.getElementById('dataProva1').value;
  
    let profName = document.getElementById('professorName').value;
    let profImg = document.getElementById('professorFoto').value;
    let curriculoProf = document.getElementById('curriculoField').value
  
    let resumoVisual = document.getElementById('resumoVisual1').value
  
    let menuSemanas = {
      date1: dataSemana1, date2: dataSemana2, date3: dataSemana3, date4: dataSemana4,
      date5: dataSemana5, date6: dataSemana6, date7: dataSemana7, date8: dataSemana8,
      tema1: temaSemana1, tema2: temaSemana2, tema3: temaSemana3, tema4: temaSemana4,
      tema5: temaSemana5, tema6: temaSemana6, tema7: temaSemana7, tema8: temaSemana8,
      link1: linkSemana1, link2: linkSemana2, link3: linkSemana3, link4: linkSemana4,
      link5: linkSemana5, link6: linkSemana6, link7: linkSemana7, link8: linkSemana8,
      disciplina: nomeDisciplina, banner: bannerDisciplina, curso: cursoName,
      plano: planoEnsino, video: apresentacaoLink, download: downloadTratadoField, 
      horas: qtdeHoras, horaSemana: horaSemana, prova: dataProva, prova2: data2Prova,
      professor: profName, foto: profImg, curriculo: curriculoProf, resumo: resumoVisual
    }
      // TopoSemanasSemVideo 7
    if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
      && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
      && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
      && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
      && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
      && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
      && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
      && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
      && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
      && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
      && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
      && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
      && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {
        
        console.log(" TopoSemanasSemVideo 7")
        console.log(menuSemanas)
        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)
      
      // TopoSemanasSemVideoComResumo 7

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
                && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {
        
        console.log("TopoSemanasSemVideoComResumo 7")
        console.log(menuSemanas)
        let copia =
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)

      // TopoSemanasSemVideoComResumo 8

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
                && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

        console.log("TopoSemanasSemVideoComResumo 8")
        console.log(menuSemanas)
        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
              <div class="container title semana-8 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date8)[2]}
                  <br />
                  ${transformaData(menuSemanas.date8)[1]}
                  <span>
                  ${transformaData(menuSemanas.date8)[0]}
                  </span>
                </div>
                <span>8</span>
                <h1>${menuSemanas.tema8}</h1>
                <a class="overlay" href=${menuSemanas.link8}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)


      // TopoSemanasSemVideo2DatasComResumo 7

      } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
                && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
                && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
                && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
                && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
                && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
                && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
                && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
                && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
                && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
                && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
                && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
                && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

        console.log("TopoSemanasSemVideo2DatasComResumo 7")
        console.log(menuSemanas)

        let copia = 
        `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      navigator.clipboard.writeText(copia)

      // TopoSemanasSemVideo2DatasComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" 
            && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

      console.log("TopoSemanasSemVideo2DatasComResumo 8 ")
      console.log(menuSemanas)

      let copia = 
      `<div class="graduation">
      <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
        <div class="container">
          <div><span class="course-name">${menuSemanas.curso}</span>
            <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
          </div>
          <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
        </div>
      </div>
      <div class="planejamento-estudo">
        <h1>Planejamento de Estudos</h1>
        <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
        <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
        <hr />
        <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
        <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
          <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
            href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
      </div>
      <div class="intro">
        <div class="container">
          <div class="container">
            <h2>Formador</h2>
            <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
              <div>
                <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                <h4>Autor</h4>
                <p>${menuSemanas.curriculo}</p>
              </div>
            </div>
          </div>
          <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
            <div class="resumo-visual">
            <div>
            <h3>Resumo Visual da Disciplina</h3>
            <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
            </div>
            <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
            </div>
          </a>
          <div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
            <div class="container title semana-8 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date8)[2]}
                <br />
                ${transformaData(menuSemanas.date8)[1]}
                <span>
                ${transformaData(menuSemanas.date8)[0]}
                </span>
              </div>
              <span>8</span>
              <h1>${menuSemanas.tema8}</h1>
              <a class="overlay" href=${menuSemanas.link8}></a>
            </div>
          </div>
        </div>
      </div>
    </div>`
      navigator.clipboard.writeText(copia)


    // TopoSemanasSemVideo2Datas 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
            && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

    console.log("TopoSemanasSemVideo2Datas 7")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="planejamento-estudo">
      <h1>Planejamento de Estudos</h1>
      <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
      <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
      <hr />
      <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
      <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
        <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
          href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
    </div>
    <div class="intro">
      <div class="container">
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)
    

  // TopoSemanasSemVideo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

  console.log("TopoSemanasSemVideo 8")
  console.log(menuSemanas)

  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="planejamento-estudo">
    <h1>Planejamento de Estudos</h1>
    <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
    <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
    <hr />
    <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
    <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
      <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
        href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
  </div>
  <div class="intro">
    <div class="container">
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
        <div class="container title semana-8 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date8)[2]}
            <br />
            ${transformaData(menuSemanas.date8)[1]}
            <span>
            ${transformaData(menuSemanas.date8)[0]}
            </span>
          </div>
          <span>8</span>
          <h1>${menuSemanas.tema8}</h1>
          <a class="overlay" href=${menuSemanas.link8}></a>
        </div>
      </div>
    </div>
  </div>
</div>`
  navigator.clipboard.writeText(copia)
  

  // TopoSemanasSemVideo2Datas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

  console.log("TopoSemanasSemVideo2Datas 8")
  console.log(menuSemanas)

  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="planejamento-estudo">
    <h1>Planejamento de Estudos</h1>
    <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
    <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemanal} horas/semana</strong></p>
    <hr />
    <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
    <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
      <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
        href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
  </div>
  <div class="intro">
    <div class="container">
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
        <div class="container title semana-8 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date8)[2]}
            <br />
            ${transformaData(menuSemanas.date8)[1]}
            <span>
            ${transformaData(menuSemanas.date8)[0]}
            </span>
          </div>
          <span>8</span>
          <h1>${menuSemanas.tema8}</h1>
          <a class="overlay" href=${menuSemanas.link8}></a>
        </div>
      </div>
    </div>
  </div>
</div>`
  navigator.clipboard.writeText(copia)


  //TopoSemanasSemEstudo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== ""
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== ""
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == ""
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== ""
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== ""
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== ""
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== ""
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== ""
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== ""
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == ""
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

  console.log("TopoSemanasSemEstudo 7")
  console.log(menuSemanas)
  let copia = 
  `<div class="graduation">
  <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
    <div class="container">
      <div><span class="course-name">${menuSemanas.curso}</span>
        <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
      </div>
      <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
    </div>
  </div>
  <div class="intro">
    <div class="container">
    <h2>Apresenta&ccedil;&atilde;o</h2>
    <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
    <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
      <div class="container">
        <h2>Formador</h2>
        <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
          <div>
            <h3>Prof. Dr. ${menuSemanas.professor}</h3>
            <h4>Autor</h4>
            <p>${menuSemanas.curriculo}</p>
          </div>
        </div>
      </div>
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date1)[2]}
            <br />
            ${transformaData(menuSemanas.date1)[1]}
            <span>
            ${transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>${menuSemanas.tema1}</h1>
          <a class="overlay" href=${menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date2)[2]}
            <br />
            ${transformaData(menuSemanas.date2)[1]}
            <span>
            ${transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>${menuSemanas.tema2}</h1>
          <a class="overlay" href=${menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date3)[2]}
            <br />
            ${transformaData(menuSemanas.date3)[1]}
            <span>
            ${transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>${menuSemanas.tema3}</h1>
          <a class="overlay" href=${menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date4)[2]}
            <br />
            ${transformaData(menuSemanas.date4)[1]}
            <span>
            ${transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>${menuSemanas.tema4}</h1>
          <a class="overlay" href=${menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date5)[2]}
            <br />
            ${transformaData(menuSemanas.date5)[1]}
            <span>
            ${transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>${menuSemanas.tema5}</h1>
          <a class="overlay" href=${menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date6)[2]}
            <br />
            ${transformaData(menuSemanas.date6)[1]}
            <span>
            ${transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>${menuSemanas.tema6}</h1>
          <a class="overlay" href=${menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            ${transformaData(menuSemanas.date7)[2]}
            <br />
            ${transformaData(menuSemanas.date7)[1]}
            <span>
            ${transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>${menuSemanas.tema7}</h1>
          <a class="overlay" href=${menuSemanas.link7}></a>
        </div>
      </div>
    </div>
  </div>
</div>`
  navigator.clipboard.writeText(copia)

    // TopoSemanasSemEstudo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {
  
    console.log("TopoSemanasSemEstudo 8")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="intro">
      <div class="container">
      <h2>Apresenta&ccedil;&atilde;o</h2>
      <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
      <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
          <div class="container title semana-8 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date8)[2]}
              <br />
              ${transformaData(menuSemanas.date8)[1]}
              <span>
              ${transformaData(menuSemanas.date8)[0]}
              </span>
            </div>
            <span>8</span>
            <h1>${menuSemanas.tema8}</h1>
            <a class="overlay" href=${menuSemanas.link8}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)

    // TopoSemanasSemEstudoComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

    console.log("TopoSemanasSemEstudoComResumo 7")
    console.log(menuSemanas)

    let copia = 
    `<div class="graduation">
    <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
      <div class="container">
        <div><span class="course-name">${menuSemanas.curso}</span>
          <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
        </div>
        <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
      </div>
    </div>
    <div class="intro">
      <div class="container">
      <h2>Apresenta&ccedil;&atilde;o</h2>
      <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
      <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
        <div class="container">
          <h2>Formador</h2>
          <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
            <div>
              <h3>Prof. Dr. ${menuSemanas.professor}</h3>
              <h4>Autor</h4>
              <p>${menuSemanas.curriculo}</p>
            </div>
          </div>
        </div>
        <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
          <div class="resumo-visual">
          <div>
          <h3>Resumo Visual da Disciplina</h3>
          <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
          </div>
          <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
          </div>
        </a>
        <div class="container desbloqueio">
          <h2>Menu das Semanas</h2>
          <div class="container title semana-1 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date1)[2]}
              <br />
              ${transformaData(menuSemanas.date1)[1]}
              <span>
              ${transformaData(menuSemanas.date1)[0]}
              </span>
            </div>
            <span>1</span>
            <h1>${menuSemanas.tema1}</h1>
            <a class="overlay" href=${menuSemanas.link1}></a>
          </div>
          <div class="container title semana-2 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date2)[2]}
              <br />
              ${transformaData(menuSemanas.date2)[1]}
              <span>
              ${transformaData(menuSemanas.date2)[0]}
              </span>
            </div>
            <span>2</span>
            <h1>${menuSemanas.tema2}</h1>
            <a class="overlay" href=${menuSemanas.link2}></a>
          </div>
          <div class="container title semana-3 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date3)[2]}
              <br />
              ${transformaData(menuSemanas.date3)[1]}
              <span>
              ${transformaData(menuSemanas.date3)[0]}
              </span>
            </div>
            <span>3</span>
            <h1>${menuSemanas.tema3}</h1>
            <a class="overlay" href=${menuSemanas.link3}></a>
          </div>
          <div class="container title semana-4 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date4)[2]}
              <br />
              ${transformaData(menuSemanas.date4)[1]}
              <span>
              ${transformaData(menuSemanas.date4)[0]}
              </span>
            </div>
            <span>4</span>
            <h1>${menuSemanas.tema4}</h1>
            <a class="overlay" href=${menuSemanas.link4}></a>
          </div>
          <div class="container title semana-5 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date5)[2]}
              <br />
              ${transformaData(menuSemanas.date5)[1]}
              <span>
              ${transformaData(menuSemanas.date5)[0]}
              </span>
            </div>
            <span>5</span>
            <h1>${menuSemanas.tema5}</h1>
            <a class="overlay" href=${menuSemanas.link5}></a>
          </div>
          <div class="container title semana-6 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date6)[2]}
              <br />
              ${transformaData(menuSemanas.date6)[1]}
              <span>
              ${transformaData(menuSemanas.date6)[0]}
              </span>
            </div>
            <span>6</span>
            <h1>${menuSemanas.tema6}</h1>
            <a class="overlay" href=${menuSemanas.link6}></a>
          </div>
          <div class="container title semana-7 desabilitada">
            <div class="before">
              ${transformaData(menuSemanas.date7)[2]}
              <br />
              ${transformaData(menuSemanas.date7)[1]}
              <span>
              ${transformaData(menuSemanas.date7)[0]}
              </span>
            </div>
            <span>7</span>
            <h1>${menuSemanas.tema7}</h1>
            <a class="overlay" href=${menuSemanas.link7}></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    navigator.clipboard.writeText(copia)
      // TopoSemanasSemEstudoComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== ""
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){
              
              console.log("TopoSemanasSemEstudoComResumo 8")
              console.log(menuSemanas)
              let copia = 
              `<div class="graduation">
        <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">${menuSemanas.curso}</span>
              <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>${menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
            <div class="container desbloqueio">
              <h2>Menu das Semanas</h2>
              <div class="container title semana-1 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date1)[2]}
                  <br />
                  ${transformaData(menuSemanas.date1)[1]}
                  <span>
                  ${transformaData(menuSemanas.date1)[0]}
                  </span>
                </div>
                <span>1</span>
                <h1>${menuSemanas.tema1}</h1>
                <a class="overlay" href=${menuSemanas.link1}></a>
              </div>
              <div class="container title semana-2 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date2)[2]}
                  <br />
                  ${transformaData(menuSemanas.date2)[1]}
                  <span>
                  ${transformaData(menuSemanas.date2)[0]}
                  </span>
                </div>
                <span>2</span>
                <h1>${menuSemanas.tema2}</h1>
                <a class="overlay" href=${menuSemanas.link2}></a>
              </div>
              <div class="container title semana-3 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date3)[2]}
                  <br />
                  ${transformaData(menuSemanas.date3)[1]}
                  <span>
                  ${transformaData(menuSemanas.date3)[0]}
                  </span>
                </div>
                <span>3</span>
                <h1>${menuSemanas.tema3}</h1>
                <a class="overlay" href=${menuSemanas.link3}></a>
              </div>
              <div class="container title semana-4 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date4)[2]}
                  <br />
                  ${transformaData(menuSemanas.date4)[1]}
                  <span>
                  ${transformaData(menuSemanas.date4)[0]}
                  </span>
                </div>
                <span>4</span>
                <h1>${menuSemanas.tema4}</h1>
                <a class="overlay" href=${menuSemanas.link4}></a>
              </div>
              <div class="container title semana-5 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date5)[2]}
                  <br />
                  ${transformaData(menuSemanas.date5)[1]}
                  <span>
                  ${transformaData(menuSemanas.date5)[0]}
                  </span>
                </div>
                <span>5</span>
                <h1>${menuSemanas.tema5}</h1>
                <a class="overlay" href=${menuSemanas.link5}></a>
              </div>
              <div class="container title semana-6 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date6)[2]}
                  <br />
                  ${transformaData(menuSemanas.date6)[1]}
                  <span>
                  ${transformaData(menuSemanas.date6)[0]}
                  </span>
                </div>
                <span>6</span>
                <h1>${menuSemanas.tema6}</h1>
                <a class="overlay" href=${menuSemanas.link6}></a>
              </div>
              <div class="container title semana-7 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date7)[2]}
                  <br />
                  ${transformaData(menuSemanas.date7)[1]}
                  <span>
                  ${transformaData(menuSemanas.date7)[0]}
                  </span>
                </div>
                <span>7</span>
                <h1>${menuSemanas.tema7}</h1>
                <a class="overlay" href=${menuSemanas.link7}></a>
              </div>
              <div class="container title semana-8 desabilitada">
                <div class="before">
                  ${transformaData(menuSemanas.date8)[2]}
                  <br />
                  ${transformaData(menuSemanas.date8)[1]}
                  <span>
                  ${transformaData(menuSemanas.date8)[0]}
                  </span>
                </div>
                <span>8</span>
                <h1>${menuSemanas.tema8}</h1>
                <a class="overlay" href=${menuSemanas.link8}></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
              navigator.clipboard.writeText(copia)
                // TopoSemanasSemPlanejamento_e_Video 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== ""
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
            && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

              console.log("TopoSemanasSemPlanejamento_e_Video 7")
              console.log(menuSemanas)

              let copia = 
              `<div class="graduation">
              <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
                <div class="container">
                  <div><span class="course-name">${menuSemanas.curso}</span>
                    <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                  </div>
                  <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
                </div>
              </div>
              <div class="intro">
                <div class="container">
                  <div class="container">
                    <h2>Formador</h2>
                    <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                      <div>
                        <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                        <h4>Autor</h4>
                        <p>${menuSemanas.curriculo}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container desbloqueio">
                    <h2>Menu das Semanas</h2>
                    <div class="container title semana-1 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date1)[2]}
                        <br />
                        ${transformaData(menuSemanas.date1)[1]}
                        <span>
                        ${transformaData(menuSemanas.date1)[0]}
                        </span>
                      </div>
                      <span>1</span>
                      <h1>${menuSemanas.tema1}</h1>
                      <a class="overlay" href=${menuSemanas.link1}></a>
                    </div>
                    <div class="container title semana-2 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date2)[2]}
                        <br />
                        ${transformaData(menuSemanas.date2)[1]}
                        <span>
                        ${transformaData(menuSemanas.date2)[0]}
                        </span>
                      </div>
                      <span>2</span>
                      <h1>${menuSemanas.tema2}</h1>
                      <a class="overlay" href=${menuSemanas.link2}></a>
                    </div>
                    <div class="container title semana-3 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date3)[2]}
                        <br />
                        ${transformaData(menuSemanas.date3)[1]}
                        <span>
                        ${transformaData(menuSemanas.date3)[0]}
                        </span>
                      </div>
                      <span>3</span>
                      <h1>${menuSemanas.tema3}</h1>
                      <a class="overlay" href=${menuSemanas.link3}></a>
                    </div>
                    <div class="container title semana-4 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date4)[2]}
                        <br />
                        ${transformaData(menuSemanas.date4)[1]}
                        <span>
                        ${transformaData(menuSemanas.date4)[0]}
                        </span>
                      </div>
                      <span>4</span>
                      <h1>${menuSemanas.tema4}</h1>
                      <a class="overlay" href=${menuSemanas.link4}></a>
                    </div>
                    <div class="container title semana-5 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date5)[2]}
                        <br />
                        ${transformaData(menuSemanas.date5)[1]}
                        <span>
                        ${transformaData(menuSemanas.date5)[0]}
                        </span>
                      </div>
                      <span>5</span>
                      <h1>${menuSemanas.tema5}</h1>
                      <a class="overlay" href=${menuSemanas.link5}></a>
                    </div>
                    <div class="container title semana-6 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date6)[2]}
                        <br />
                        ${transformaData(menuSemanas.date6)[1]}
                        <span>
                        ${transformaData(menuSemanas.date6)[0]}
                        </span>
                      </div>
                      <span>6</span>
                      <h1>${menuSemanas.tema6}</h1>
                      <a class="overlay" href=${menuSemanas.link6}></a>
                    </div>
                    <div class="container title semana-7 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date7)[2]}
                        <br />
                        ${transformaData(menuSemanas.date7)[1]}
                        <span>
                        ${transformaData(menuSemanas.date7)[0]}
                        </span>
                      </div>
                      <span>7</span>
                      <h1>${menuSemanas.tema7}</h1>
                      <a class="overlay" href=${menuSemanas.link7}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
              navigator.clipboard.writeText(copia)

  // TopoSemanasSemPlanejamento_e_Video 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
            && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == ""
            && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
            && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
            && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
            && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
            && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
            && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
            && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
            && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
            && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
            && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
            && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){
              console.log("TopoSemanasSemPlanejamento_e_Video 8")
              console.log(menuSemanas)

              let copia = 
              `<div class="graduation">
              <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
                <div class="container">
                  <div><span class="course-name">${menuSemanas.curso}</span>
                    <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                  </div>
                  <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
                </div>
              </div>
              <div class="intro">
                <div class="container">
                  <div class="container">
                    <h2>Formador</h2>
                    <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                      <div>
                        <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                        <h4>Autor</h4>
                        <p>${menuSemanas.curriculo}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container desbloqueio">
                    <h2>Menu das Semanas</h2>
                    <div class="container title semana-1 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date1)[2]}
                        <br />
                        ${transformaData(menuSemanas.date1)[1]}
                        <span>
                        ${transformaData(menuSemanas.date1)[0]}
                        </span>
                      </div>
                      <span>1</span>
                      <h1>${menuSemanas.tema1}</h1>
                      <a class="overlay" href=${menuSemanas.link1}></a>
                    </div>
                    <div class="container title semana-2 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date2)[2]}
                        <br />
                        ${transformaData(menuSemanas.date2)[1]}
                        <span>
                        ${transformaData(menuSemanas.date2)[0]}
                        </span>
                      </div>
                      <span>2</span>
                      <h1>${menuSemanas.tema2}</h1>
                      <a class="overlay" href=${menuSemanas.link2}></a>
                    </div>
                    <div class="container title semana-3 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date3)[2]}
                        <br />
                        ${transformaData(menuSemanas.date3)[1]}
                        <span>
                        ${transformaData(menuSemanas.date3)[0]}
                        </span>
                      </div>
                      <span>3</span>
                      <h1>${menuSemanas.tema3}</h1>
                      <a class="overlay" href=${menuSemanas.link3}></a>
                    </div>
                    <div class="container title semana-4 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date4)[2]}
                        <br />
                        ${transformaData(menuSemanas.date4)[1]}
                        <span>
                        ${transformaData(menuSemanas.date4)[0]}
                        </span>
                      </div>
                      <span>4</span>
                      <h1>${menuSemanas.tema4}</h1>
                      <a class="overlay" href=${menuSemanas.link4}></a>
                    </div>
                    <div class="container title semana-5 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date5)[2]}
                        <br />
                        ${transformaData(menuSemanas.date5)[1]}
                        <span>
                        ${transformaData(menuSemanas.date5)[0]}
                        </span>
                      </div>
                      <span>5</span>
                      <h1>${menuSemanas.tema5}</h1>
                      <a class="overlay" href=${menuSemanas.link5}></a>
                    </div>
                    <div class="container title semana-6 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date6)[2]}
                        <br />
                        ${transformaData(menuSemanas.date6)[1]}
                        <span>
                        ${transformaData(menuSemanas.date6)[0]}
                        </span>
                      </div>
                      <span>6</span>
                      <h1>${menuSemanas.tema6}</h1>
                      <a class="overlay" href=${menuSemanas.link6}></a>
                    </div>
                    <div class="container title semana-7 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date7)[2]}
                        <br />
                        ${transformaData(menuSemanas.date7)[1]}
                        <span>
                        ${transformaData(menuSemanas.date7)[0]}
                        </span>
                      </div>
                      <span>7</span>
                      <h1>${menuSemanas.tema7}</h1>
                      <a class="overlay" href=${menuSemanas.link7}></a>
                    </div>
                    <div class="container title semana-8 desabilitada">
                      <div class="before">
                        ${transformaData(menuSemanas.date8)[2]}
                        <br />
                        ${transformaData(menuSemanas.date8)[1]}
                        <span>
                        ${transformaData(menuSemanas.date8)[0]}
                        </span>
                      </div>
                      <span>8</span>
                      <h1>${menuSemanas.tema8}</h1>
                      <a class="overlay" href=${menuSemanas.link8}></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
              navigator.clipboard.writeText(copia)
      // TopoSemanasSemPlanejamento_e_Video_ComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanasSemPlanejamento_e_Video_ComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="intro">
              <div class="container">
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src={$'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>{menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

      // TopoSemanasSemPlanejamento_e_Video_ComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanasSemPlanejamento_e_Video_ComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="intro">
              <div class="container">
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanasComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanasComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2Datas 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas2Datas 7")
            console.log(menuSemanas)

            let copia = `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2DatasComResumo 7
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("TopoSemanas2DatasComResumo 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanasComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanasComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // TopoSemanas2Datas 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas2Datas 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // TopoSemanas2DatasComResumo 8
} else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" 
          && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" 
          && menuSemanas.horas !== "" && menuSemanas.horaSemana !== "" && menuSemanas.prova !== "" 
          && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" 
          && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("TopoSemanas2DatasComResumo 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="graduation">
            <div class="container header"><img class="img-banner" src=${'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
              <div class="container">
                <div><span class="course-name">${menuSemanas.curso}</span>
                  <h1 class="discipline-name">${menuSemanas.disciplina}</h1>
                </div>
                <a class="btn btn-syllabus" href=${menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
              </div>
            </div>
            <div class="planejamento-estudo">
              <h1>Planejamento de Estudos</h1>
              <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>${menuSemanas.horas} horas</strong></p>
              <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>${menuSemanas.horaSemana} horas/semana</strong></p>
              <hr />
              <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> ${transformaData(menuSemanas.prova)[2]}/${transformaData2(menuSemanas.prova)[1]}</strong> e <strong> ${transformaData(menuSemanas.prova2)[2]}/${transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
              <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
                <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
                  href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
            </div>
            <div class="intro">
              <div class="container">
              <h2>Apresenta&ccedil;&atilde;o</h2>
              <iframe src=${menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
              <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href=${menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
                <div class="container">
                  <h2>Formador</h2>
                  <div class="teacher"><img src=${'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                    <div>
                      <h3>Prof. Dr. ${menuSemanas.professor}</h3>
                      <h4>Autor</h4>
                      <p>${menuSemanas.curriculo}</p>
                    </div>
                  </div>
                </div>
                <a href=${menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
                  <div class="resumo-visual">
                  <div>
                  <h3>Resumo Visual da Disciplina</h3>
                  <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
                  </div>
                  <img style={{maxWidth: '850px'}} src=${'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
                  </div>
                </a>
                <div class="container desbloqueio">
                  <h2>Menu das Semanas</h2>
                  <div class="container title semana-1 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date1)[2]}
                      <br />
                      ${transformaData(menuSemanas.date1)[1]}
                      <span>
                      ${transformaData(menuSemanas.date1)[0]}
                      </span>
                    </div>
                    <span>1</span>
                    <h1>${menuSemanas.tema1}</h1>
                    <a class="overlay" href=${menuSemanas.link1}></a>
                  </div>
                  <div class="container title semana-2 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date2)[2]}
                      <br />
                      ${transformaData(menuSemanas.date2)[1]}
                      <span>
                      ${transformaData(menuSemanas.date2)[0]}
                      </span>
                    </div>
                    <span>2</span>
                    <h1>${menuSemanas.tema2}</h1>
                    <a class="overlay" href=${menuSemanas.link2}></a>
                  </div>
                  <div class="container title semana-3 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date3)[2]}
                      <br />
                      ${transformaData(menuSemanas.date3)[1]}
                      <span>
                      ${transformaData(menuSemanas.date3)[0]}
                      </span>
                    </div>
                    <span>3</span>
                    <h1>${menuSemanas.tema3}</h1>
                    <a class="overlay" href=${menuSemanas.link3}></a>
                  </div>
                  <div class="container title semana-4 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date4)[2]}
                      <br />
                      ${transformaData(menuSemanas.date4)[1]}
                      <span>
                      ${transformaData(menuSemanas.date4)[0]}
                      </span>
                    </div>
                    <span>4</span>
                    <h1>${menuSemanas.tema4}</h1>
                    <a class="overlay" href=${menuSemanas.link4}></a>
                  </div>
                  <div class="container title semana-5 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date5)[2]}
                      <br />
                      ${transformaData(menuSemanas.date5)[1]}
                      <span>
                      ${transformaData(menuSemanas.date5)[0]}
                      </span>
                    </div>
                    <span>5</span>
                    <h1>${menuSemanas.tema5}</h1>
                    <a class="overlay" href=${menuSemanas.link5}></a>
                  </div>
                  <div class="container title semana-6 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date6)[2]}
                      <br />
                      ${transformaData(menuSemanas.date6)[1]}
                      <span>
                      ${transformaData(menuSemanas.date6)[0]}
                      </span>
                    </div>
                    <span>6</span>
                    <h1>${menuSemanas.tema6}</h1>
                    <a class="overlay" href=${menuSemanas.link6}></a>
                  </div>
                  <div class="container title semana-7 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date7)[2]}
                      <br />
                      ${transformaData(menuSemanas.date7)[1]}
                      <span>
                      ${transformaData(menuSemanas.date7)[0]}
                      </span>
                    </div>
                    <span>7</span>
                    <h1>${menuSemanas.tema7}</h1>
                    <a class="overlay" href=${menuSemanas.link7}></a>
                  </div>
                  <div class="container title semana-8 desabilitada">
                    <div class="before">
                      ${transformaData(menuSemanas.date8)[2]}
                      <br />
                      ${transformaData(menuSemanas.date8)[1]}
                      <span>
                      ${transformaData(menuSemanas.date8)[0]}
                      </span>
                    </div>
                    <span>8</span>
                    <h1>${menuSemanas.tema8}</h1>
                    <a class="overlay" href=${menuSemanas.link8}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`

          // MenuSemanasOnly 1
            navigator.clipboard.writeText(copia)
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == ""
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 == "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 == "" && menuSemanas.tema3 == "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 == "" 
          && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 1")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 2
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 == "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 2")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)


            // MenuSemanasOnly 3
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 == ""
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== ""
          && menuSemanas.link3 !== "" && menuSemanas.link4 == "" && menuSemanas.link5 == ""
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 3")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 4
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 == "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 4")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 5
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == ""
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 == "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 5")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 6
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 == "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 6")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
          </div>`

            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 7
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" 
          && menuSemanas.tema8 == "" && menuSemanas.link8 == ""){

            console.log("MenuSemanasOnly 7")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)

            // MenuSemanasOnly 8
} else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" 
          && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" 
          && menuSemanas.horas == "" && menuSemanas.horaSemana == "0" && menuSemanas.prova == "" 
          && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" 
          && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" 
          && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" 
          && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" 
          && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" 
          && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" 
          && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" 
          && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" 
          && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" 
          && menuSemanas.tema8 !== "" && menuSemanas.link8 !== ""){

            console.log("MenuSemanasOnly 8")
            console.log(menuSemanas)

            let copia = 
            `<div class="container desbloqueio">
            <h2>Menu das Semanas</h2>
            <div class="container title semana-1 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date1)[2]}
                <br />
                ${transformaData(menuSemanas.date1)[1]}
                <span>
                ${transformaData(menuSemanas.date1)[0]}
                </span>
              </div>
              <span>1</span>
              <h1>${menuSemanas.tema1}</h1>
              <a class="overlay" href=${menuSemanas.link1}></a>
            </div>
            <div class="container title semana-2 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date2)[2]}
                <br />
                ${transformaData(menuSemanas.date2)[1]}
                <span>
                ${transformaData(menuSemanas.date2)[0]}
                </span>
              </div>
              <span>2</span>
              <h1>${menuSemanas.tema2}</h1>
              <a class="overlay" href=${menuSemanas.link2}></a>
            </div>
            <div class="container title semana-3 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date3)[2]}
                <br />
                ${transformaData(menuSemanas.date3)[1]}
                <span>
                ${transformaData(menuSemanas.date3)[0]}
                </span>
              </div>
              <span>3</span>
              <h1>${menuSemanas.tema3}</h1>
              <a class="overlay" href=${menuSemanas.link3}></a>
            </div>
            <div class="container title semana-4 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date4)[2]}
                <br />
                ${transformaData(menuSemanas.date4)[1]}
                <span>
                ${transformaData(menuSemanas.date4)[0]}
                </span>
              </div>
              <span>4</span>
              <h1>${menuSemanas.tema4}</h1>
              <a class="overlay" href=${menuSemanas.link4}></a>
            </div>
            <div class="container title semana-5 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date5)[2]}
                <br />
                ${transformaData(menuSemanas.date5)[1]}
                <span>
                ${transformaData(menuSemanas.date5)[0]}
                </span>
              </div>
              <span>5</span>
              <h1>${menuSemanas.tema5}</h1>
              <a class="overlay" href=${menuSemanas.link5}></a>
            </div>
            <div class="container title semana-6 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date6)[2]}
                <br />
                ${transformaData(menuSemanas.date6)[1]}
                <span>
                ${transformaData(menuSemanas.date6)[0]}
                </span>
              </div>
              <span>6</span>
              <h1>${menuSemanas.tema6}</h1>
              <a class="overlay" href=${menuSemanas.link6}></a>
            </div>
            <div class="container title semana-7 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date7)[2]}
                <br />
                ${transformaData(menuSemanas.date7)[1]}
                <span>
                ${transformaData(menuSemanas.date7)[0]}
                </span>
              </div>
              <span>7</span>
              <h1>${menuSemanas.tema7}</h1>
              <a class="overlay" href=${menuSemanas.link7}></a>
            </div>
            <div class="container title semana-8 desabilitada">
              <div class="before">
                ${transformaData(menuSemanas.date8)[2]}
                <br />
                ${transformaData(menuSemanas.date8)[1]}
                <span>
                ${transformaData(menuSemanas.date8)[0]}
                </span>
              </div>
              <span>8</span>
              <h1>${menuSemanas.tema8}</h1>
              <a class="overlay" href=${menuSemanas.link8}></a>
            </div>
          </div>`
            navigator.clipboard.writeText(copia)
          
    } else {

          alert('Ops! Parece que algo deu errado! Por favor, preencha todos os dados obrigatórios* ou pelo menos a primeira semana da seção "Menu Semanas". Se ainda estiver com problemas, consulte o guia através do botão +Ajuda.');
      
          return (
            null
          )
    }
  } 
  
  
  
  // -------------------------- FUNÇÕES -------------------------------------
  
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
>>>>>>> b53efad478aa2d3910953e145632b50752f5a39c
  }