import MInputSingleline from './web-components/m-input-singleline';

export const uiInit = (): void => {
    !customElements.get('m-input-singleline') &&
        customElements.define('m-input-singleline', MInputSingleline);
};
