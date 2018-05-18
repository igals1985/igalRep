using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05_ref_param
{
    class Program
    {
        /*
        static void PrintArr(int[] arr)
        {
            foreach (int item in arr)
            {
                Console.Write(item + " ");
            }

            Console.WriteLine();
        }
        */
        static void UpdetByRef(ref int[] answer, ref int[] arr)
        {
            int counter = 0;
            foreach (int item in answer)
            {
                if (item % 2 == 0)
                {
                    arr[counter] = item;

                    counter++;
                 }
            }
        }
        




        static void Main(string[] args)
        {
            int[] answer = new int[10];
            for (int i = 0; i < answer.Length; i++)
            {
                answer[i] = Convert.ToInt32(Console.ReadLine());
            }
            int[] arr = new int[10];

           

            UpdetByRef(ref answer, ref arr);
            Console.WriteLine();


        }



    }
}


/*
 * 
 *    static void UpdareArr(int[] arr)
        {
            arr[0] = 9;
        }

        static void InitArr(int[] arr)
        {
            arr = new int[] { 4, 4 };
        }
*/