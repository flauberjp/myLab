using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace WatchAux
{
    class Program
    {
        static void Main(string[] args)
        {
            using (Process p = new Process())
            {
                var myMainProjectFolder = Directory.GetCurrentDirectory() + @"\..\dotnetWatch";
                if (args.Length == 1)
                {
                    myMainProjectFolder = args[0];
                }                
                System.IO.Directory.CreateDirectory(myMainProjectFolder + @"\DELETE_ME");

                p.StartInfo.CreateNoWindow = false;
                p.StartInfo.RedirectStandardOutput = true;
                p.StartInfo.UseShellExecute = false;
                p.StartInfo.WorkingDirectory = myMainProjectFolder;
                p.StartInfo.Arguments = "watch run";
                p.StartInfo.FileName = "dotnet";
                p.Start();

                string line;

                while ((line = p.StandardOutput.ReadLine()) != null)
                {
                    Console.WriteLine(line);
                    if (line.Contains("Application started. Press Ctrl+C to shut down."))
                    {
                        System.IO.File.WriteAllText(myMainProjectFolder + @"\DELETE_ME\DELETE_ME.html", line);
                    }
                }

                p.WaitForExit();
            }
        }
    }
}
