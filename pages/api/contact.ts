import type { NextApiRequest, NextApiResponse } from 'next';
import sendGridMail from '@sendgrid/mail';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    const message = {
        to: 'paynerg2@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: `${req.body.name} sent the following message:
        
        ${req.body.message}`,
    };

    try {
        await sendGridMail.send(message);
        res.send('Success');
    } catch (error) {
        res.send('Message could not be sent');
    }
};

export default contact;
