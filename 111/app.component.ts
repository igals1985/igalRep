
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    vegtableArray: string[] = new Array<string>();
    firstChart: string
    vegtableArrayWithChart: string[] = new Array<string>();
    errorMsg: string;

    constructor() {
        this.vegtableArray = ["artichoke", "aubergine", "amrud", "asparagus", "legumes", "alfalfa sprouts", "azuki beans", "bean sprouts", "black beans", "black-eyed peas", "borlotti bean", "broad beans", "chickpeas", "green beans", "kidney beans", "lentils", "lima beans", "mung beans", "navy beans", "pinto beans", "runner beans", "split peas", "soy beans", "peas", "mangetout", "broccoflower", "broccoli", "brussels", "cabbage", "kohlrabi", "cauliflower", "celery", "endive", "fiddleheads", "frisee", "fennel", "greens", "beet greens", "bok choy", "chard", "collard greens", "kale", "mustard greens", "spinach", "herbs", "anise", "basil", "caraway", "cilantro", "coriander", "chamomile", "dill", "fennel", "lavender", "lemon Grass", "marjoram", "oregano", "parsley", "rosemary", "sage", "thyme", "lettuce", "arugula", "mushrooms", "nettles", "spinach", "okra", "onions", "Chives", "Garlic", "Leek", "onion", "shallot", "scallion", "parsley", "bell pepper", "chili pepper", "Jalape?o", "Habanero", "Paprika", "Tabasco pepper", "pepper", "rhubarb", "root vegetables", "beetroot", "cattlefeed", "carrot", "celeriac", "daikon", "ginger", "parsnip", "rutabaga", "turnip", "radish", "wasabi", "horseradish", "white radish", "skirret", "sweetcorn", "topinambur", "acorn squash", "bitter melon", "banana squash", "cucumber", "delicata", "gem squash", "hubbard squash", "marrow", "patty pans", "pumpkin", "tat soi", "tomato", "tubers", "jicama", "artichoke", "potato", "quandong", "sunchokes", "sweet potato", "taro", "yam", "water chestnut", "watercress", "zucchini"]
    }
    public searchFirstChart() {
        this.vegtableArrayWithChart = []
        if (this.firstChart.length < 2) {
            for (let i = 0; i <= this.vegtableArray.length; i++) {
                if (this.firstChart == this.vegtableArray[i].charAt(0)) {
                    this.vegtableArrayWithChart.push(this.vegtableArray[i]);
                    this.errorMsg = "";
                }
            }
        }
        else {
            
            this.errorMsg = "please enter only 1 chart";
        }
    }
}
