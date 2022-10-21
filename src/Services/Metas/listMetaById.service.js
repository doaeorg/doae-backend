import { getMetaById } from "../../Repositories/MetaRepository.js";
import { getInstitutionById } from "../Institutions/getInstitutionById.service.js";

export async function listMetaById(id) {
	try {
		const meta = await getMetaById(id);
        const institution = getInstitutionById(meta.id_institution);
        const percent = (current_quantity * 100) / target_value;
        const newObjectMetaFormat = {
                "id": meta.id,
                "name": meta.name,
                "target_value": meta.value,
                "current_quantity": meta.current_value,
                "institution": institution.name,
                "createdAt": meta.createdAt,
                "day_limit": meta.day_limit,
                "percent": percent,
                "description": meta.description 
        }
		return newObjectMetaFormat;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar a meta.");
	}
}