
export const tepleteNewUser = (token) =>{

    const url = `hutrit-proyect.firebaseapp.com/checkuser${token}`;

    return `<body width="100%" bgcolor="#F1F1F1" style="margin: 0; mso-line-height-rule: exactly;">
    <center style="width: 100%; background: #F1F1F1; text-align: left;">

        <!-- Visually Hidden Preheader Text : BEGIN -->
        <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;">
            (Optional) This text will appear in the inbox preview, but not the email body. It can be used to supplement the email subject line or even summarize the email's contents. Extended text preheaders (~490 characters) seems like a better UX for anyone using a screenreader or voice-command apps like Siri to dictate the contents of an email. If this text is not included, email clients will automatically populate it using the text (including image alt text) at the start of the email's body.
        </div>
        <!-- Visually Hidden Preheader Text : END -->

        <!--
            Set the email width. Defined in two places:
            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
            2. MSO tags for Desktop Windows Outlook enforce a 680px width.
            Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
        -->
        <div style="max-width: 680px; margin: auto;" class="email-container">
            <!--[if mso]>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
            <tr>
            <td>
            <![endif]-->

            <!-- Email Body : BEGIN -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;" class="email-container">


                <!-- HEADER : BEGIN -->
                <tr>
                    <td bgcolor="#333333">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 30px 40px 30px 40px; text-align: center;">
                                    <img src="logo.png" width="57" height="13" alt="alt_text" border="0" style="height: auto; font-family: sans-serif; font-size: 18px; line-height: 20px; color: #555555;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- HEADER : END -->

                <!-- HERO : BEGIN -->
                <tr>
                    <!-- Bulletproof Background Images c/o https://backgrounds.cm -->
                    <td background="background.png" bgcolor="#222222" align="center" valign="top" style="text-align: center; background-position: center center !important; background-size: cover !important;">
                        <!--[if gte mso 9]>
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:680px; height:380px; background-position: center center !important;">
                        <v:fill type="tile" src="background.png" color="#222222" />
                        <v:textbox inset="0,0,0,0">
                        <![endif]-->
                        <div>
                            <!--[if mso]>
                            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="500">
                            <tr>
                            <td align="center" valign="middle" width="500">
                            <![endif]-->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:500px; margin: auto;">

                                <tr>
                                    <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                </tr>

                                <tr>
                                  <td align="center" valign="middle">
                                    
                                  <table>
                                     <tr>
                                         <td valign="top" style="text-align: center; padding: 60px 0 10px 20px;">
                                     
                                             <h1 style="margin: 0; font-family: 'Montserrat', sans-serif; font-size: 30px; line-height: 36px; color: #ffffff; font-weight: bold;">Bienvenido a HUTRIT</h1>
                                         </td>
                                     </tr>
                                     <tr>
                                         <td valign="top" style="text-align: center; padding: 10px 20px 15px 20px; font-family: sans-serif; font-size: 18px; line-height: 20px; color: #ffffff;">
                                             <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore.</p>
                                         </td>
                                     </tr>
                                     <tr>
                                         <td valign="top" align="center" style="text-align: center; padding: 15px 0px 60px 0px;">

                                             <!-- Button : BEGIN -->
                                             <center>
                                             <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="text-align: center;">
                                                 <tr>
                                                     <td style="border-radius: 50px; background: #0159B7; text-align: center;" class="button-td">
                                                         <a href="${url}" style="background: #0159B7; border: 15px solid #0159B7; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 50px; font-weight: bold;" class="button-a">
                                                             <span style="color:#ffffff;" class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;Verificar Cuenta&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                         </a>
                                                     </td>
                                                 </tr>
                                             </table>
                                             </center>
                                             <!-- Button : END -->

                                         </td>
                                     </tr> 
                                  </table>

                                  </td>
                                </tr>
                            
                                <tr>
                                    <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                </tr>

                            </table>
                           
                        </div>
                       
                    </td>
                </tr>
                
                <tr>
                    <td bgcolor="#292828">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 30px 30px; text-align: center;">
                                    
                                    <table align="center" style="text-align: center;">
                                        <tr>
                                            <td>
                                                <img src="facebook.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                            <td width="10">&nbsp;</td>
                                            <td>
                                                <img src="twitter.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                            <td width="10">&nbsp;</td>
                                            <td>
                                                <img src="linkedin.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </div>

    </center>
</body>`
}

export const tepleteCambiosPass = (token) =>{

    const url = `hutrit-proyect.firebaseapp.com/recoverypassword/${token}`;

    return `<body width="100%" bgcolor="#F1F1F1" style="margin: 0; mso-line-height-rule: exactly;">
    <center style="width: 100%; background: #F1F1F1; text-align: left;">

        <!-- Visually Hidden Preheader Text : BEGIN -->
        <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;">
            (Optional) This text will appear in the inbox preview, but not the email body. It can be used to supplement the email subject line or even summarize the email's contents. Extended text preheaders (~490 characters) seems like a better UX for anyone using a screenreader or voice-command apps like Siri to dictate the contents of an email. If this text is not included, email clients will automatically populate it using the text (including image alt text) at the start of the email's body.
        </div>
        <!-- Visually Hidden Preheader Text : END -->

        <!--
            Set the email width. Defined in two places:
            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
            2. MSO tags for Desktop Windows Outlook enforce a 680px width.
            Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
        -->
        <div style="max-width: 680px; margin: auto;" class="email-container">
            <!--[if mso]>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
            <tr>
            <td>
            <![endif]-->

            <!-- Email Body : BEGIN -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;" class="email-container">


                <!-- HEADER : BEGIN -->
                <tr>
                    <td bgcolor="#333333">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 30px 40px 30px 40px; text-align: center;">
                                    <img src="logo.png" width="57" height="13" alt="alt_text" border="0" style="height: auto; font-family: sans-serif; font-size: 18px; line-height: 20px; color: #555555;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- HEADER : END -->

                <!-- HERO : BEGIN -->
                <tr>
                    <!-- Bulletproof Background Images c/o https://backgrounds.cm -->
                    <td background="background.png" bgcolor="#222222" align="center" valign="top" style="text-align: center; background-position: center center !important; background-size: cover !important;">
                        <!--[if gte mso 9]>
                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:680px; height:380px; background-position: center center !important;">
                        <v:fill type="tile" src="background.png" color="#222222" />
                        <v:textbox inset="0,0,0,0">
                        <![endif]-->
                        <div>
                            <!--[if mso]>
                            <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="500">
                            <tr>
                            <td align="center" valign="middle" width="500">
                            <![endif]-->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:500px; margin: auto;">

                                <tr>
                                    <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                </tr>

                                <tr>
                                  <td align="center" valign="middle">
                                    
                                  <table>
                                     <tr>
                                         <td valign="top" style="text-align: center; padding: 60px 0 10px 20px;">
                                     
                                             <h1 style="margin: 0; font-family: 'Montserrat', sans-serif; font-size: 30px; line-height: 36px; color: #ffffff; font-weight: bold;">Bienvenido a HUTRIT</h1>
                                         </td>
                                     </tr>
                                     <tr>
                                         <td valign="top" style="text-align: center; padding: 10px 20px 15px 20px; font-family: sans-serif; font-size: 18px; line-height: 20px; color: #ffffff;">
                                             <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                             tempor incididunt ut labore.</p>
                                         </td>
                                     </tr>
                                     <tr>
                                         <td valign="top" align="center" style="text-align: center; padding: 15px 0px 60px 0px;">

                                             <!-- Button : BEGIN -->
                                             <center>
                                             <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="text-align: center;">
                                                 <tr>
                                                     <td style="border-radius: 50px; background: #0159B7; text-align: center;" class="button-td">
                                                         <a href="${url}" style="background: #0159B7; border: 15px solid #0159B7; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 50px; font-weight: bold;" class="button-a">
                                                             <span style="color:#ffffff;" class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;Verificar Cuenta&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                         </a>
                                                     </td>
                                                 </tr>
                                             </table>
                                             </center>
                                             <!-- Button : END -->

                                         </td>
                                     </tr> 
                                  </table>

                                  </td>
                                </tr>
                            
                                <tr>
                                    <td height="20" style="font-size:20px; line-height:20px;">&nbsp;</td>
                                </tr>

                            </table>
                           
                        </div>
                       
                    </td>
                </tr>
                
                <tr>
                    <td bgcolor="#292828">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 30px 30px; text-align: center;">
                                    
                                    <table align="center" style="text-align: center;">
                                        <tr>
                                            <td>
                                                <img src="facebook.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                            <td width="10">&nbsp;</td>
                                            <td>
                                                <img src="twitter.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                            <td width="10">&nbsp;</td>
                                            <td>
                                                <img src="linkedin.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </div>

    </center>
</body>`
}