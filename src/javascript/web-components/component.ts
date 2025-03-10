/**
 * Parent class for all input methods
 *
 * Contains shared functionality that is inherited and common to all our
 * custom components. If you've written the same method twice ask whether
 * it belongs in this class instead of an individual component!
 */

export default class Component extends HTMLElement {
    protected readonly qid: string | undefined;
    protected readonly qgroup: string | undefined;
    protected readonly question: HTMLElement | null;
    protected properties: Record<string, unknown>;

    constructor() {
        super();
        console.log('Component: ', this);

        this.qid = this.dataset.questionId;
        this.qgroup = this.dataset.questionGroup;
        this.question = this.closest('o-question');
        this.properties = {};

        this.parseProperties();
    }

    private parseProperties(): void {
        const properties = this.dataset.properties;

        if (!properties) {
            return;
        }

        this.properties = JSON.parse(properties.toString());
    }
}
