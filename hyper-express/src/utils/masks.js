import { mask as masker, unMask } from 'remask';

export const masks = {
  cpf: '999.999.999-99',
  cep: '99999-999',
  codigo: '999999',
};

export const unMasks = (value) => {
  return unMask(value);
};

export const mask = (setValue, name, evt, masked) => {
  return setValue(name, masker(evt.target.value, [masked]));
};
