import axios from 'axios';

export const createInvite = (token: string, inviteDTO: InviteDTO) =>
  axios.post('/invite/create', inviteDTO, {headers: {authorization: token}});

export const validateInvite = (token: string, message: string, id: string) =>
  axios.post(
    '/invite/validate',
    {message, id},
    {headers: {authorization: token}},
  );

export const getAllInvites = (token: string) =>
  axios.get('/invite/get/all', {headers: {authorization: token}});

export const inviteResponse = (
  token: string,
  inviteId: string,
  approved: [],
  rejected: [],
) => {
  axios.post(
    '/invite/auth/guests',
    {inviteId, approved, rejected},
    {headers: {authorization: token}},
  );
};

export type InviteDTO = {
  guests: Guest[];
  exp: Date;
  lote_id: string;
};

type Guest = {
  doc_id: string;
  first_name: string;
  last_name: string;
};
