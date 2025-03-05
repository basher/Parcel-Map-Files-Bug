import Component from './component';

export default class MInputSingleline extends Component {
    protected readonly element: HTMLInputElement | null;

    constructor() {
        super();

        this.element = this.querySelector('.a-input-singleline');

        if (!this.element) return;

        this.init();
    }

    private init(): void {
        this.setLabels();
    }

    // Set pre-/post-labels.
    private setLabels(): void {
        if (!this.properties.hasOwnProperty('labels')) {
            return;
        }

        const labels = this.properties.labels as Record<string, unknown>;

        for (const [key, value] of Object.entries(labels)) {
            if (key === 'pre' && value) {
                const elemPre = this.querySelector('.a-label-pre');
                if (elemPre) {
                    elemPre.textContent = value as string;
                }
            }

            if (key === 'post' && value) {
                const elemPost = this.querySelector('.a-label-post');
                if (elemPost) {
                    elemPost.textContent = value as string;
                }
            }
        }
    }

    // Handle constructor() event listeners.
    public handleEvent(e: Event): void {
        //
    }

    // Handle (global) event listeners which are not part of this web component.
    public connectedCallback(): void {
        // e.g. document.addEventListener('broadcastChange', ...);
    }

    public disconnectedCallback(): void {
        // e.g. document.removeEventListener('broadcastChange', ...);
    }
}
