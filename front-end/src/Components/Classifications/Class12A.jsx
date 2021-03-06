import TWELVEA from '../../Images/Film Ratings/12A_Alpha.PNG'
import React, { useState } from 'react';
import { Collapse, CardFooter, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Class12A = () => {
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen12Rules, setIsOpen12Rules] = useState(false);
    const toggle12Rules = () => setIsOpen12Rules(!isOpen12Rules)
    const toggle12 = () => setIsOpen12(!isOpen12);

    return (
        <>
            <CardBody>
                <center> <img aria-label="twelveA" src={TWELVEA} width="150" height="150" onClick={toggle12} /></center>
            </CardBody>
            <Collapse isOpen={isOpen12}>
                <CardTitle onClick={toggle12}><b>12A</b></CardTitle>
                <Card>
                    <CardBody>
                        Generally not suited to children under the age of 12. Children under the age of 12 can watch any movies with this rating as long as they are accompanied
                        by an adult. As an advisory we recommend that adults should check the ratings information for the film in advance so they can make a more informed decision
                        as to whether any scenes within this film will cause particular distress to their children
                    </CardBody>

                    <Button color="primary" onClick={toggle12Rules} style={{ marginBottom: '1rem' }}>Conditions</Button>
                    <Collapse isOpen={isOpen12Rules}>
                        <Card>
                            <CardBody>
                                <ul>
                                    <li>Misuse of drugs must be infrequent and should not be glamorised</li>
                                    <li>Moderate bad language and use of strong languagemay be permitted</li>
                                    <li>Nudity ina sexual context must be brief and discreet</li>
                                    <li>Sexual activity may be briefly and discreetly portrayed</li>
                                    <li>There may be moderate violence but it should not dwell on detail</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <CardFooter >
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/12" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default Class12A;