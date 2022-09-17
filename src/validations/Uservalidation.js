import * as yup from "yup";
/*eslint-disable*/

export const adminSignUpSchema = yup.object().shape({

	password: yup.string().required("Password Required").min(4).max(18),
	email: yup.string().email().required("Email required"),

	name: yup.string().required("Name Required"),
});

export const adminLoginSchema = yup.object().shape({
	password: yup.string().required("Password Required"),
	email: yup.string().email().required("Email required"),
});
export const userChangePasswordEmail = yup.object().shape({

	emailAddress: yup.string().email().required("Email required"),
});
export const userChangePassword = yup.object().shape({

	confirmPassword: yup
		.string()
		.required("Confirm Password Required")
		.oneOf([yup.ref("password"), null], "Password must be matched"),
	password: yup.string().required("Password Required").min(4).max(18),
	ID: yup.string().required("ID Required").min(20, "ID must be valid").max(26, "ID must be valid")
});