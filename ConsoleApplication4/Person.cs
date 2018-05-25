using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication4
{
    class Person
    {
        public Person()
        {
            Age = 18;
            Name = "igal";
        }
        public Person(int paramNum=10)
        {
            Age = paramNum;

        }
        public Person(int paramNum=20, string param="dana")
        {
            Age = paramNum;
            Name = param;
        }
        private int age;

        public int Age
        {
            get { return age; }
            set
            {
                if (value >= 0 && value <= 120)
                {
                    age = value;
                }
            }
        }

        private string name;

        public string Name
        {
            get { return name; }
            set
            {
                if (value.Length >= 2 && value.Length <= 10)
                {
                    name = value;
                }

            }
        }
    }
}
