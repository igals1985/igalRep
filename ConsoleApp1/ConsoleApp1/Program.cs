using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System;
namespace CharSub
{ 
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, write first number");
            byte a= Convert.ToByte(Console.ReadLine());
            Console.WriteLine("Please write second number");
            byte b = Convert.ToByte(Console.ReadLine());
            Console.WriteLine($"The sum of two numbers is: {a+b}");

            
        }
    }
}