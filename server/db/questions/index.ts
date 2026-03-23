import { pseudocodeQuestions } from './pseudocode'
import { sqlQuestions } from './sql'
import { datenbankenQuestions } from './datenbanken'
import { umlQuestions } from './uml'
import { testingQuestions } from './testing'
import { itSicherheitQuestions } from './it-sicherheit'
import { netzwerkQuestions } from './netzwerk'
import { vorgehensmodelleQuestions } from './vorgehensmodelle'
import { oopQuestions } from './oop'
import { schnittstellenQuestions } from './schnittstellen'
import { gitQuestions } from './git'
import { speicherQuestions } from './speicher'
import { ergonomieQuestions } from './ergonomie'
import { programmiersprachenQuestions } from './programmiersprachen'
import { wisoQuestions } from './wiso'
import { datenstrukturenQuestions } from './datenstrukturen'
import { webentwicklungQuestions } from './webentwicklung'
import type { QuestionSeed } from '../seed-types'

export const allQuestions: QuestionSeed[] = [
  ...pseudocodeQuestions,
  ...sqlQuestions,
  ...datenbankenQuestions,
  ...umlQuestions,
  ...testingQuestions,
  ...itSicherheitQuestions,
  ...netzwerkQuestions,
  ...vorgehensmodelleQuestions,
  ...oopQuestions,
  ...schnittstellenQuestions,
  ...gitQuestions,
  ...speicherQuestions,
  ...ergonomieQuestions,
  ...programmiersprachenQuestions,
  ...wisoQuestions,
  ...datenstrukturenQuestions,
  ...webentwicklungQuestions,
]
