import discord
from discord.ext import commands
import datetime
import os
import sys
import dotenv
import asyncio
from dotenv import load_dotenv
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)
from connection import connecter, Topic


load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')
mqtt = connecter.create("Discord Bot")
t = Topic()
VELOCITY = 0
DIRECTION = 0
client = commands.Bot(command_prefix="!", help_command=None)


@client.command()
async def help(ctx):
    embed = discord.Embed(colour=discord.Colour(
        0xf5a623), timestamp=datetime.datetime.utcnow())
    embed.add_field(name="commands", value="desc", inline=False)
    await ctx.send(embed=embed)

# for filename in os.listdir('./cogs'): #loads all files (*.py)
#     if filename.endswith('.py'):
#         client.load_extension(f'cogs.{filename[:-3]}') #loads the file without ".py" for example: cogs.ping
#         print(f'Loaded {filename[:-3]}')

# def seperateArgs(args, delimeter):
#     finalArgs = []
#     toAppend = ''
#     index = 0
#     for i in args:
#         if(i == delimeter):
#             finalArgs.append(toAppend.strip())
#             toAppend = ''
#         else:
#             toAppend += i
#         if(index == len(args) - 1):
#             finalArgs.append(toAppend.strip())
#             toAppend = ''
#         index += 1
#     return finalArgs

async def increment(i):
  return i + 1

async def decrement(i):
  return i - 1

async def drive(v, d):
  if v > 0:
    mqtt.publish(t.throttle_forward, str(v))
  elif d < 0:
    mqtt.publish(t.throttle_reverse, str(v))
  else:
    mqtt.publish(t.throttle_reverse, "0")
  if d > 0:
    mqtt.publish(t.steering_right, str(d))
  elif d < 0:
    mqtt.publish(t.steering_left, str(d))
  else:
    mqtt.publish(t.steering_left, "0")


@client.command()
async def forward(ctx):
  await drive(VELOCITY, 0)

@client.command()
async def reverse(ctx):
  await drive(-100, 0)

@client.command()
async def stop(ctx):
  await drive(0, 0)


@client.command()
async def left(ctx):
  await drive(100, -50)

@client.command()
async def right(ctx):
  await drive(100, 50)



@client.event
async def on_ready():
  await client.change_presence(status=discord.Status.idle, activity=discord.Game("vroom!"))
  print('Logged in as')
  print(client.user.name)
  print(client.user.id)
  print('------')

client.run(TOKEN)
