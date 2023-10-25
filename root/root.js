import { Router } from "express";
import { createOneCour } from "../controllers/courController.js";
import { createOneDepartement } from "../controllers/departementController.js";
import { createOneEtudiant } from "../controllers/etudiantController.js";
import { createOneEtudiantCour } from "../controllers/etudiantCourController.js";
import { createOneEtudiantDepartement } from "../controllers/etudiantDepartementController.js";
import { createOneNote } from "../controllers/noteController.js";
import { createOneProffesseur } from "../controllers/proffesseurController.js";
import { createOneProffesseurCour } from "../controllers/proffesseurCourController.js";

const router = Router()

router.post('/createOneCour', createOneCour)
router.post('/createOneDepartement', createOneDepartement)
router.post('/createOneEtudiant', createOneEtudiant)
router.post('/createOneEtudiantCour', createOneEtudiantCour)
router.post('/createOneEtudiantDepartement', createOneEtudiantDepartement)
router.post('/createOneNote', createOneNote)
router.post('/createOneProffesseur', createOneProffesseur)
router.post('/createOneProffesseurCour', createOneProffesseurCour)

export default router