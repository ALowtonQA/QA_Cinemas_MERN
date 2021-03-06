import U from '../../Images/Film Ratings/U_Alpha.PNG'
import React, { useState } from 'react';
import { Collapse, CardFooter, Card, CardTitle, Col, CardBody, Button } from 'reactstrap';

const ClassU = () => {
    const [isOpenU, setIsOpenU] = useState(false);
    const [isOpenURules, setIsOpenURules] = useState(false);
    const toggleURules = () => setIsOpenURules(!isOpenURules)
    const toggleU = () => setIsOpenU(!isOpenU);

    return (
        <>
            <CardBody>
                <center><img aria-label="u" src={U} width="150" height="150" onClick={toggleU} id="u"/></center>
            </CardBody>
            <Collapse isOpen={isOpenU}>
                <CardTitle onClick={toggleU}><b>Universal(U)</b></CardTitle>
                <Card>
                    <CardBody>
                        This rating implies the movie is suitable for anyone aged four and above.
                        Although with children this is a guideline as it can be hard to envisage what topics could cause distress to children.
                        A general rule for any films aiming for a U rating is to have a positive theme throughout.
                        Minalisation of violence, threat or horror is the best practice although inclusion of any should offer reassuring couterbalances to offset it.
                        </CardBody>

                    <Button color="primary" onClick={toggleURules} style={{ marginBottom: '1rem' }}>Conditions</Button>
                    <Collapse isOpen={isOpenURules}>
                        <Card>
                            <CardBody>
                                <ul>
                                    <li>Any references to drugs must have clear educational purpose.</li>
                                    <li>Infrequent use of only very mild bad language.</li>
                                    <li>Occasional nudity, no sexual context.</li>
                                    <li>Only mild sexual behaviour like kissing.</li>
                                    <li>Mild violence is acceptable if it is justified by context. (i.e. comedic)</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <CardFooter >
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/U" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default ClassU;