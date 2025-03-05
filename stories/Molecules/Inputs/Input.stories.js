import {
    MInputSinglelineHtml
} from './Input';

export default {
    title: 'Molecules/Inputs',
    parameters: {
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        PreLabel: {
            control: 'text',
            description: 'Specifies the text to be placed before the input.',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'n/a' }
            },
        },
        PostLabel: {
            control: 'text',
            description: 'Specifies the text to be placed after the input.',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'n/a' }
            },
        },
    }
};

export const MInputSingleline = {
    args: {
        PreLabel: '',
        PostLabel: ''
    },
    render: (args) => MInputSinglelineHtml(args),
};
MInputSingleline.storyName = '<m-input-singleline>';
