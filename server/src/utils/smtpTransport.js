const { google } = require("googleapis");
const nodemailer = require("nodemailer");
// initialze google oauth2 authentication
const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2("client id", "client secret", "redirect url");

myOAuth2Client.setCredentials({
  refresh_token:
    "1//04XdJuRhIQNSZCgYIARAAGAQSNwF-L9IrMxBqqOBN4A1UOC-ErO0Ld0T6maO-0HGmuedhon-8UT31-S_1IklBmy3G_OmwDqK1AZc",
});

const myAccessToken =
  "ya29.a0AfB_byDaEibFN2uz4ofZRWGCyXfdYbyRZhsY0kAWMcddDueaSer2xkwuGmvkXO5xTUv6NkXK_t3vuiBz3Vvp1egBh1R1ZcjsOzM69yQYnAloCmGVbDdbJ8vjrZki0IsyMU4sDNKnm4e0Eem5Ji_MyF77pu6DCqVu46hZaCgYKAY0SARASFQHGX2MiZEJKnhYA2QJKeuR-ZLoTww0171";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "okejonnas@gmail.com",
    clientId:
      "673398770291-fo2ertajsej791ija63kb1rt5936e1vd.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04XdJuRhIQNSZCgYIARAAGAQSNwF-L9IrMxBqqOBN4A1UOC-ErO0Ld0T6maO-0HGmuedhon-8UT31-S_1IklBmy3G_OmwDqK1AZc",
    accessToken: myAccessToken,
  },
});

module.exports = transport;
