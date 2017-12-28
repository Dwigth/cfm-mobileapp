import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutUsComponent implements OnInit {
  info:string;
  title:string;
  constructor() {
    this.title = "¿Quiénes somos?";
    this.info = "En tanto proyecto pedagógico, nos caracteriza el máximo nivel del profesorado que capacitamos en Centros de valía en el país, las regulaciones del cupo por academia para garantizar una enseñanza personalizada, el empeño de una formación integral que favorecemos con la coordinación de diversos cursos en otras vertientes artísticas diferentes de la música, la búsqueda de un alumnado que en su proceso de aprendizaje también devenga en experiencia mediante la realización de espectáculos, y un fuerte compromiso social que se mani esta con las promociones para distintos miembros de la familia del estudiante, así como mediante el otorgamiento de becas de matrícula y residencia a algunos casos sociales que así lo ameriten.";
  }

  ngOnInit() {}
}
