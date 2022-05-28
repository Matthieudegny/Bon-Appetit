export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * action pour demander à ajouter un message dans le tableau de message, en tant qu
 * @param {String} author l'auteur du message
 * @param {String} text le texte du message
 * @returns {Action}
 */
export function actionAddMessage(author, text) {
  return {
    type: ADD_MESSAGE,
    payload: { author, text },
  };
}
