import React from 'react';
import { Card, CardContent } from "@mui/material";

export type BarMenuItemProps = {}

export default function BarMenuItem({}: BarMenuItemProps) {
    return (
      <div className="bar-menu-item">
          <Card className={'bar-menu-card'}>
              <CardContent style={{color: "white"}}>
                  <h3>Name</h3>
                  <h5>Ingredients</h5>
                  <h3>5.00E</h3>
              </CardContent>
          </Card>
      </div>
    );
}
