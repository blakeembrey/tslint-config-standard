import{preProcessFile} from 'typescript'
import {findRule} from 'tslint'

preProcessFile('const x = 10')
