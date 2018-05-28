using System;

namespace CalcClass
{
        static class Calc
        {

            //-------------------------------properties--------------------------

            private static DateTime nowDate;

            //--------------------------------constructor-------------------------

            static Calc()
            {
                nowDate = DateTime.Now;
                Console.WriteLine($"This ia calc first use the date is {nowDate}");
            }


        //-------------------------------functions--------------------------

        public static int GetSub(int s1, int s2)
            {
                return s1 + s2;
            }

        public static int GetSub(int s1, int s2, int s3)
            {
                return s1 + s2 + s3;
            }


        public static double GetSub(double s1, double s2)
            {
                return s1 + s2;
            }
        }
    }
