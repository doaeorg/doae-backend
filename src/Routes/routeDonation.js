import {
	postDonation,
	getDonations,
	getDonationById,
	getDonationsByIdInstitution,
	getDonationsByIdTarget,
	putDonation,
	deleteDonation,
	getStatusDonationsByIdInstitution,
	getSumDonations
} from "../Controllers/DonationController.js";

import { Router } from "express";

import {
	postDonationMidd,
	getDonationsMidd,
	getIdDonationMidd,
	getIdDonationsInsMidd,
	getIdDonationsTargetMidd,
	putDonationMidd
} from '../Middlewares/donationMiddlewares.js'

const routesDonation = Router();

routesDonation.post("/donation", postDonationMidd, postDonation);

routesDonation.get("/donation", getDonationsMidd, getDonations);

routesDonation.get("/donation/sum", getSumDonations);

routesDonation.get("/donation/:id", getIdDonationMidd, getDonationById);

routesDonation.get("/donation/institution/:id_institution", getIdDonationsInsMidd, getDonationsByIdInstitution);

routesDonation.get("/donation/status/:id_institution", getStatusDonationsByIdInstitution);

routesDonation.get("/donation/target/:id_target", getIdDonationsTargetMidd, getDonationsByIdTarget);

routesDonation.put("/donation/:id", putDonationMidd, putDonation);

routesDonation.delete("/donation/:id", getIdDonationMidd, deleteDonation);

export default routesDonation;