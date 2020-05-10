import React from 'react';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import useCampusCardStyles from './useCampusCardStyles';

const CampusCard = ({ campus, color, image }) => {
    const styleProps = { backgroundColor: color }
    const cards = useCampusCardStyles(styleProps);

    const campusText = campus.length <= 4 ? campus.toUpperCase() : campus[0].toUpperCase() + campus.slice(1);

    return (
        <div className="campus-card">
            <Card className={cards.root}>
                <CardMedia image={image} className={cards.media} />
                <CardContent className={cards.content} align="center">
                    <Link to={`/${campus}`} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            className={cards.button}
                            size="large"
                        >
                            {campusText}
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div >
    );
};

export default CampusCard;