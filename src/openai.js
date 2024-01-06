const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: "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"
})
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choices[0].text;
}

// import OpenAI from 'openai';
// const openai = new OpenAI({
//     apiKey: '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',
//     organization: 'org-xnFR77WjAYUycetHFKUsrO63',
//     dangerouslyAllowBrowser: true
//   });

//   export async function sendMsgToOpenAI(message){
//     const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: message}],
//         model: 'gpt-3.5-turbo',
//       });
//       return chatCompletion.choices;
//   }