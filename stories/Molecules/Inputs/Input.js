export const MInputSinglelineHtml = (args) => `
<m-input-singleline
    data-question-id="_Q0"
    data-question-group="_QText"
    data-properties='{
        "labels":{
            "pre":"${args.PreLabel}",
            "post":"${args.PostLabel}"
        }
    }'
>
    <span class="a-label-pre"></span>
    <input
        type="text"
        id="_Q0"
        class="a-input-singleline"
    />
    <span class="a-label-post"></span>
</m-input-singleline>
`;
