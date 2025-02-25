const phonePattern = /^\d{10}$/;
const emailPattern = {
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
};

export const VALIDATIONS = {
  emailPattern,
  phonePattern,
};
