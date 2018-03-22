// ייבוא של מחלקה מובנת בספריית אנגולר
//@Component - לשם שימוש בפקודת 
import { Component } from '@angular/core';



//json object that has all the config for the current component
var configForComponent = {
    selector: 'app-root',  //htmlדרך שם זה ניצור תגיות בדף ה
    templateUrl: './app.component.html',  //שמייצג את הקומפוננטה htmlתוכן ה
    styleUrls: ['./app.component.css']   //שמעצב את הקומפוננטה cssתוכן ה
};


//Component - הוא חלק מיוחד
//בעזרתו נוכל להגדיר את החלקים של הקומפוננטה שניצור
// @ - is a prefix for a decorator
@Component(configForComponent)
export class AppComponent {
}


/*
כללים חשובים:
----------------------------
1)  every component is a simle class
2)  every component should have the prefix - "export" 
3)  every class that represents a component
    must to have above the @Component decorator
*/




