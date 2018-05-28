using CalcClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace static_class
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine($"The sum of two int is: {Calc.GetSub (1,2)}");
            Console.WriteLine($"The sum of Three int is: {Calc.GetSub(1,2,3)}");
            Console.WriteLine($"The sum of two double is: { Calc.GetSub(1.1,2.2)}");


        }
    }
}
